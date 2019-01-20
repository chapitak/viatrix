package main
 
import (
    "fmt"
    "io/ioutil"
    "net/http"
)
 
func main() {
    // GET 호출
    resp, err := http.Get("http://54.180.32.24:1337/posts")
    if err != nil {
        panic(err)
    }
 
    defer resp.Body.Close()
 
    // 결과 출력
    data, err := ioutil.ReadAll(resp.Body)
    if err != nil {
        panic(err)
    }
    fmt.Printf("%s\n", string(data))
}