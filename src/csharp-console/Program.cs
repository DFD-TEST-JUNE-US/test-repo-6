using System;
namespace ConsoleApp
{
    class Program
    {
        static void Main(string[] args)
        {
            string userInput = Console.ReadLine();
            Console.WriteLine("Hello, " + userInput);
            // Potential SQL injection for testing
            string query = "SELECT * FROM users WHERE name = '" + userInput + "'";
        }
    }
}
