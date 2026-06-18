import os
import subprocess

def run_command(user_input):
    # Potential command injection for testing
    result = subprocess.run(user_input, shell=True, capture_output=True)
    return result.stdout

def read_file(filename):
    # Potential path traversal for testing
    with open("/data/" + filename, "r") as f:
        return f.read()

if __name__ == "__main__":
    print("Python sample app")
