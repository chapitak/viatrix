package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
)

func main() {
	dirInfo, err := ioutil.ReadDir(LOCAL_DIR)
	if err != nil {
		log.Println("(main) ", err)
		return
	}

	s, err := getDirectoryInfo(LOCAL_DIR, dirInfo)
	if err != nil {
		log.Println("(main) ", err)
		return
	}

	// At least indexJson have to have an empty array
	if string(s) == "null" {
		s = s[:0]
		s = append(s, "[]"...)
	}

	// The created json is going to be written at OUTPUT_FILE.
	err = ioutil.WriteFile(OUTPUT_FILE, s, 0644)
	if err != nil {
		log.Println("(main) ", err)
		return
	}

	// The created json will be injected to Blog.vue file.
	injectToBlogComponent(s)

	// Check if the generated file is correct.
	written_s, err := ioutil.ReadFile(OUTPUT_FILE)
	if err != nil {
		log.Println("(main) ", err)
		return
	}
	if bytes.Equal(s, written_s) == false {
		log.Println("(main) Error in file writing phase", err)
		return
	}
	log.Println("(main) index.json is written at \"" + OUTPUT_FILE + "\"")

	written_s, err = prettyprint(written_s)
	if err != nil {
		log.Println("(main) Error in json printing phase", err)
		return
	}
	fmt.Println(string(written_s))
}

func prettyprint(b []byte) ([]byte, error) {
	var out bytes.Buffer
	err := json.Indent(&out, b, "", "  ")
	return out.Bytes(), err
}