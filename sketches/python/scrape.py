import requests, cPickle, shutil, time, csv, json
from unidecode import unidecode
from collections import defaultdict

# all = {}
# errorout = open("errors.log", "w")

# with open('id.csv', 'w') as outfile:
# 	writer = csv.writer(outfile)
# 	for i in range(700):
# 		playerurl = "http://fantasy.premierleague.com/web/api/elements/%s/"
# 		print playerurl % i
# 		r = requests.get(playerurl % i)

# 		# skip non-existent players
# 		if r.status_code != 200: continue

# 		data = r.json()
# 		try:
# 			writer.writerow([unidecode(data[u'first_name']),\
# 											unidecode(data[u'second_name']),\
# 											data[u'id']])
# 		except:
# 			print data

with open('id.csv','r') as infile:
	data = {}
	reader =csv.reader(infile)
	for row in reader:
		data[row[0] + ' ' + row[1]] = row[2]
	with open('data.json', 'w') as outfile:
		json.dump(data, outfile)