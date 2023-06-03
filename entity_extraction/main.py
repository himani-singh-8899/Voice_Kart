
import spacy

nlp = spacy.load('en_core_web_lg')
def extract_entity(text):
    doc = nlp(text)
    itemName = []
    quantity = []
    for token in doc:
        # print(token.pos_, token)
        if token.pos_ == 'NOUN':
            itemName.append(token)
        if token.pos_ == 'NUM':
            quantity.append(token.text)

    return (itemName, quantity)


# if __name__ == '__main__':
#     sentence = "I want 3 kg tomatoes from walmart"
#     print("Running....")
#     print(extract_entity(text=sentence))



