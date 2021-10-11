import csv

# header = list()
# line_count = 0
# content = list()

# with open("md_csv_example.csv", "r", encoding="utf8")as exfile:
#     exam = csv.reader(exfile, delimiter = ",", quotechar='"')
#     print(exam)
#     for csv_con in exam:
#         if line_count == 11:
#             break
#         if line_count == 0:
#             header = csv_con
#             line_count += 1
#         else:
#             if csv_con[2] == "COLUMBIA COUNTY":
#                 content.append(csv_con)            
#                 line_count += 1
        
# with open("md_csv_example_w.csv", "w", encoding="utf8")as wfile:
#     writer = csv.writer(wfile)
#     writer.writerow(header)
#     writer.writerows(content)

# phone = [
#     {"co":"apple", "version":"iphone11", "color":"gray"},
#     {"co":"apple", "version":"iphone11", "color":"spacegray"},
#     {"co":"apple", "version":"iphone11", "color":"green"},
#     {"co":"apple", "version":"iphone12", "color":"gray"},
#     {"co":"apple", "version":"iphone12", "color":"purple"},
#     {"co":"samsung", "version":"galaxy21", "color":"black"},
#     {"co":"samsung", "version":"galaxy21", "color":"purple"}
# ]

# with open("md_csv_example_dw.csv", "w", encoding="utf8")as wdfile:
#     fieldnames = ["co", "color", "version"]
#     d_writer = csv.DictWriter(wdfile, fieldnames=fieldnames)

#     d_writer.writeheader()
#     d_writer.writerows(phone)

with open ("md_csv_example_w.csv", "r", encoding="utf8")as drfile:
    d_reader = csv.DictReader(drfile)
    d_reader_header = d_reader.fieldnames
    print(d_reader_header)
    for row in d_reader:
        print(row)
