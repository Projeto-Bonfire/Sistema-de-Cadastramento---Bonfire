#!/bin/bash

process_files() {
    local dir="$1"
    ls "$dir"
		echo "       "
    cd "$dir" || exit
    for file in *; do
        if [[ -f $file ]]; then
            mod_date=$(stat -c "%y" "$file")
						creation_date=$(ls -lc --time=creation --time-style=long-iso "$file" | awk '{print $6, $7}')
            echo "file: $file create: $creation_date mod: $mod_date"
        fi
    done
}

	echo "----------------------------------------------------------------------------------------------------------"
  echo "Diretório: src/pages/error"
	process_files "src/pages/error"
	
	echo "----------------------------------------------------------------------------------------------------------"
  echo "Diretório: src/pages/finish"
	process_files "../finish"
	
	echo "----------------------------------------------------------------------------------------------------------"
  echo "Diretório: src/pages/insertClass"
	process_files "../insertClass"
	
	echo "----------------------------------------------------------------------------------------------------------"
  echo "Diretório: src/pages/insertUser"
	process_files "../insertUser"
	
	echo "----------------------------------------------------------------------------------------------------------"
  echo "Diretório: src/pages/main"
	process_files "../main"
	
	echo "----------------------------------------------------------------------------------------------------------"
  echo "Diretório: src/components/progressBar"
	process_files "../../components/progressBar"
	
	echo "----------------------------------------------------------------------------------------------------------"
  echo "Diretório: src/components/layout"
	process_files "../layout"
	
	echo "----------------------------------------------------------------------------------------------------------"
  echo "Diretório: src/components/footer"
	process_files "../footer"

	echo "----------------------------------------------------------------------------------------------------------"
	echo "Diretório: src/services"
	process_files "../../services"
	
	
	echo "----------------------------------------------------------------------------------------------------------"
	echo "Diretório: src"
	process_files "../../src"