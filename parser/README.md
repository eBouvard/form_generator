# Parser for Arena

Parse unstructured information saved in a variety of file formats based on a pre-defined structure saved in a JSON under the name ***CANEVAS_STRUCT.json*** in the Assets folder.

- Python 3.7
- API with Flask

**Create the Conda environment:**

Pre-requisite: Miniconda3 or Anaconda
Conda will use the yml file to install all dependencies
```
conda env create
```

**Run in API:**

```
python3 api.py
```

**Run in local mode:**

```
python3 parser.py [file]
```
