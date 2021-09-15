# import textblob library, made by someone else, so we can use their code.
# note that you'll need to install textblob to run it on your own computer
from textblob import TextBlob

# store a passage we want to test in a 'text' variable
text = '''
One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked.
'''
# turn our basic text string into a TextBlob, which allows us to do many TextBlob like things to it. Sort of like…putting keys in our car ignition so that we can drive it and do car-like things.
blob = TextBlob(text)
# get the sentiment score of the text and print it out. the ".sentiment" piece is something from text blob's documentation - https://textblob.readthedocs.io/en/dev/quickstart.html - that gives us the sentiment score we want
print(blob.sentiment)
