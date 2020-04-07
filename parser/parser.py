from __future__ import print_function
import os
import sys
import json
from Structuring.structure import annex_walker, restructure
from Matching.segmenter import get_annexes, recursive_items
from Matching.parser import make_dic, conformity_stat
from Extracting.metadata_extractor import get_meta
from Extracting.text_extractor import get_text
from Formatting.formatter import get_arbo, to_json, meta_to_df
canvas = "assets/CANEVAS_STRUCT.json"
struct_path = os.getcwd() + canvas

def parse_doc(path_opord, struct_path=canvas):
    final_struct = json.load(open(canvas))
    list_of_titles = recursive_items(final_struct)
    dic_of_files = {}
    
    opord = path_opord
    # Get metadata of opord and assign it
    meta = get_meta(opord)
    print("-----------------------")
    print("Got metadata")
    if meta['Title']:
        dic_of_files['title'] = meta['Title']
    else:
        dic_of_files['title'] = os.path.basename(path_opord)
    dic_of_files['author'] = meta['Author(s)']
    dic_of_files['last_modified_by'] = meta['Last Modified By']
    dic_of_files['created_date'] = meta['Created Date']
    dic_of_files['modified_date'] = meta['Modified Date']
    dic_of_files['location'] = opord

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

    #flat_dic2 = make_dic(list_of_lists, annex_titles, list_of_titles, fuzzy=True)
    #conform2 = conformity_stat(flat_dic2)

    #if conform1 > conform2:
    flat_dic = flat_dic1
    dic_of_files['conformity'] = conform1
    #else:
    #    #counter1 += 1
    #    flat_dic = flat_dic2
    #    dic_of_files['conformity'] = conform2

    print("-----------------------")
    print("Made flat collection of texts")

    # Then restructure it from your definiton, respecting hieraàrchy and assign it to a field of our sub dic
    dic_of_annexes = {}
    for annex in flat_dic.keys():
        final_struct = json.load(open(struct_path))
        dic_of_annexes[str(annex)] = restructure(final_struct, flat_dic[str(annex)])
    dic_of_files["content"] = dic_of_annexes
    print("-----------------------")
    print("Restructured flat collection of texts")
    return dic_of_files

if __name__ == '__main__':
    if len(sys.argv) > 1:
        path_opord = sys.argv[1]
    print(parse_doc(path_opord))
    
