#Se usa la libreria tabula
#más información en https://github.com/chezou/tabula-py
import tabula
#insertamos el pdf de casos confirmados
df = tabula.read_pdf("confirmados.pdf", lattice=True, pages='all')

#extraemos la información en un archivo .json .csv
tabula.convert_into("confirmados.pdf", "output.csv", output_format="csv", pages='all')