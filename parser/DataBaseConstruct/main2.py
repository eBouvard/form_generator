from __future__ import print_function
import os
import sys
from Structuring.structure import annex_walker
from Formatting.formatter import meta_to_df
import json
from Matching.segmenter import recursive_items
from Matching.segmenter import get_annexes
from Matching.parser import make_dic
from Matching.parser import conformity_stat
from Extracting.metadata_extractor import get_meta
from Extracting.text_extractor import get_text
from Formatting.formatter import get_arbo
from Formatting.formatter import to_json
from Structuring.structure import restructure


try:
    struct_path = os.getcwd() + "/CANEVAS_STRUCT.json"
except FileNotFoundError:
    print("Rename your structure to 'CANEVAS_STRUCT.json' and put at the root of the repo")
    
    
path_opord = os.getcwd() + "/Data/11- PRODUITS FINALISES/20200220_CERASTES_DIV31_DB_FINAL.pdf"

def structure_single_opord(path_opord, struct_path="CANEVAS_STRUCT.json"):
    final_struct = json.load(open(struct_path))
    list_of_titles = recursive_items(final_struct)
    dic_of_files = {}
    
    opord = path_opord
    # Get metadata of opord and assign it
    meta = get_meta(opord)
    print("-----------------------")
    print("Got metadata")
    dic_of_files['Title'] = meta['Title']
    dic_of_files['Authors'] = meta['Author(s)']
    dic_of_files['Last_Modified_By'] = meta['Last Modified By']
    dic_of_files['Created_Date'] = meta['Created Date']
    dic_of_files['Modified_Date'] = meta['Modified Date']
    dic_of_files['Location'] = opord

    # Extract text from opo
    flat_text = get_text(opord)
    print("-----------------------")
    print("Got text")

    # Seperate annexes
    list_of_lists, annex_titles = get_annexes(flat_text)
    print("-----------------------")
    print("Got annexes")

    # Create flat dictionnary of opord
    flat_dic1 = make_dic(list_of_lists, annex_titles, list_of_titles, fuzzy=False)
    conform1 = conformity_stat(flat_dic1)

    flat_dic2 = make_dic(list_of_lists, annex_titles, list_of_titles, fuzzy=True)
    conform2 = conformity_stat(flat_dic2)

    if conform1 > conform2:
        flat_dic = flat_dic1
        dic_of_files['Conformity'] = conform1
    else:
        #counter1 += 1
        flat_dic = flat_dic2
        dic_of_files['Conformity'] = conform2

    print("-----------------------")
    print("Made flat collection of texts")

    # Then restructure it from your definiton, respecting hierarchy and assign it to a field of our sub dic
    dic_of_annexes = {}
    for annex in flat_dic.keys():
        final_struct = json.load(open(struct_path))
        dic_of_annexes[str(annex)] = restructure(final_struct, flat_dic[str(annex)])
    dic_of_files["Content"] = dic_of_annexes
    print("-----------------------")
    print("Restructured flat collection of texts")
    return dic_of_files

print(structure_single_opord(path_opord))