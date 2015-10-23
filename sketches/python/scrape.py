import requests, cPickle, shutil, time

all = {}
errorout = open("errors.log", "w")

# for i in range(700):
playerurl = "http://fantasy.premierleague.com/web/api/elements/%s/"
r = requests.get(playerurl % 4)

# skip non-existent players
# if r.status_code != 200: continue

# all[i] = r.json()

print r.json()

with open('data.json', 'w') as outfile:
	cPickle.dump(r.json(), outfile)