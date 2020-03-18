#Se usa la libreria tabula
#más información en https://github.com/chezou/tabula-py
import tabula
#insertamos el pdf de casos confirmados
df = tabula.read_pdf("confirmados.pdf", pages='all')

#extraemos la información en un archivo .json .csv
tabula.convert_into("confirmados.pdf", "output.json", output_format="json", pages='all')