:: Before run this batch file, change the LIB_PATH according to your 
:: local settings

set LIB_PATH=../npm.solr-item-editor/npm.solr-item-editor
set APP_PATH_RELATIVE_TO_LIB=../../Showtimes

cmd /c "cd %LIB_PATH% && npm run build && npm pack && cd %APP_PATH_RELATIVE_TO_LIB% && npm install %LIB_PATH%\npm.solr-item-editor-0.0.0.tgz"
