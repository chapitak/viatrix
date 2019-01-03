package main
 
import (
    "fmt"
    "io/ioutil"
    "net/http"
)
 
func main() {
    // GET 호출
    resp, err := http.Get("http://jeongkyo.kim:1337/postsnews")
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