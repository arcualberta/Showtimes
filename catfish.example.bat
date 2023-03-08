:: Before run this batch file, change the CATFISH_UI_LIB_PATH according to your local settings

set CATFISH_UI_LIB_PATH=../Catfish-3.0/catfish-ui/
set SHOWTIMES_PATH_FROM_CATFISH_UI=../../Showtimes

cmd /c "cd %CATFISH_UI_LIB_PATH% && npm run build && npm pack && cd %SHOWTIMES_PATH_FROM_CATFISH_UI% && npm install %CATFISH_UI_LIB_PATH%\applets-0.0.0.tgz"