use std::process::Command;
use std::io::{self, BufRead};

fn main() {
    let stdin = io::stdin();
    let user_input = stdin.lock().lines().next().unwrap().unwrap();
    
    // Potential command injection for testing
    let output = Command::new("sh")
        .arg("-c")
        .arg(&user_input)
        .output()
        .expect("Failed to execute");
    
    println!("Output: {:?}", output.stdout);
}
