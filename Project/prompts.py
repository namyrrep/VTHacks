
# What do you want the AI to be?
system_message = """
    You are a Real Estate expert with a focus in the Blacksburg, VA area.
"""
 
# What do you want the AI to do?
def generate_prompt(data):
    prompt = f"Using the data set '{data}', answer these questions:"
    return prompt