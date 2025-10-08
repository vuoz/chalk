#!/run/current-system/sw/bin/python3

import  csv, os

def get_file_name(file_suffix:str)->str:
    cwd = os.getcwd()
    file_name = f"{cwd}/{file_suffix}"
    return file_name


def transform_row(row:dict)-> dict:
    row["Rotation"] =  (360.0 - float(row["Rotation"])) % 360.0
    row["Layer"] = "Bottom"

    if row["Package"].find("diode") != -1:
        row["Rotation"] = float(row["Rotation"]) + 180.0 % 360.0

    if row ["Package"].find("power") != -1:
        row["Rotation"] = float(row["Rotation"]) + 180.0 % 360.0

    return row

def transform(file_name:str,folder: str): 
    fin = open(file_name)
    fout = open(f"{folder}/CPL-reversible-bottom.csv","w",newline='')
    reader = csv.DictReader(fin)
    writer = csv.DictWriter(fout,fieldnames=reader.fieldnames)
    writer.writeheader()
    for  row  in  reader :
        transformed_row = transform_row(row)
        print(transformed_row)
        writer.writerow(transformed_row)
    print(" Successfully tranformed CPL file to bottom layer")
    return


def main():

    pass



if __name__ == "__main__":
    folder = "pcbs/jlcpcb/production_files"
    file_suffix = f"{folder}/CPL-reversible.csv"
    file_name = get_file_name(file_suffix)
    folder_name = get_file_name(folder)
    transform(file_name,folder_name)

