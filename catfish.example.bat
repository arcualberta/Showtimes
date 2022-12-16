:: Run this batch file as: cmd /c catfish.bat
:: Before run it, change the CATFISH_UI_LIB_PATH according to your local settings

set CATFISH_UI_LIB_PATH = "../Catfish3-workflow/catfish-ui/"
set SHOWTIMES_PATH ="."

cd CATFISH_UI_LIB_PATH && npm run build && npm pack && cd "../../Showtimes" && npm install CATFISH_UI_LIB_PATH\arcualberta-catfish-ui-1.0.0.tgz