from openai import OpenAI
from dotenv import load_dotenv
import prompts
 
# Load the .env file
load_dotenv()
 
# Automatrically puts key into OpenAI
client = OpenAI ()
 
# Read data from tables/PDF
data = "blacksburg_rentals_sample"
 
# Generate Prompts
system_message = prompts.system_message
prompt = prompts.generate_prompt(data)
 
messages = [
    {"role": "system", "content": system_message},
    {"role": "user", "content": prompt}
]
 
def get_something(user_messages):
    completion = client.chat.completions.create(
        model = "gpt-4o-mini",
        messages = user_messages,
        temperature = 0.7,
        max_tokens = 200
    )
    return completion.choices[0].message.content
 
print(get_something(messages))
 
# Allows the user to continuously call the chatBot until they exit the site.
while (True):
    # Ask the user for a Promopt.
    user_input = input("Ask me anything.")
 
    input_messages = [
        {"role": "system", "content": system_message},
        {"role": "user", "content": user_input}
    ]
 
    print(get_something(input_messages))