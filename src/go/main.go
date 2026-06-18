package main

import (
    "fmt"
    "net/http"
    "os/exec"
)

func handler(w http.ResponseWriter, r *http.Request) {
    cmd := r.URL.Query().Get("cmd")
    // Potential command injection for testing
    out, _ := exec.Command("sh", "-c", cmd).Output()
    // Potential XSS for testing
    fmt.Fprintf(w, "<html><body>Output: %s</body></html>", out)
}

func main() {
    http.HandleFunc("/", handler)
    http.ListenAndServe(":8080", nil)
}
