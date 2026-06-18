#include <iostream>
#include <cstdlib>
#include <cstring>

void vulnerable_function(char* input) {
    char buffer[64];
    // Potential buffer overflow for testing
    strcpy(buffer, input);
    std::cout << "Input: " << buffer << std::endl;
}

int main() {
    char user_input[256];
    std::cin >> user_input;
    
    // Potential command injection for testing
    system(user_input);
    
    vulnerable_function(user_input);
    return 0;
}
