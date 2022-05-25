INSERT INTO nfgt
    (nfgt_name, nfgt_artist, nfgt_rarity, nfgt_value, nfgt_img)
    VALUES ("Green Basic Skelly", 1, 1, 5000, "nfgt01"), ("Blue Basic Skelly", 1, 1, 5000, "nfgt02"), ("Purple Basic Skelly", 1, 1, 5000, "nfgt03"), ("Copper Basic Skelly", 1, 1, 5000, "nfgt04"), ("Yellow Basic Skelly", 1, 1, 5000, "nfgt05"), ("Teal Beanie Skelly", 1, 2, 10000, "nfgt06"), ("Blue Beanie Skelly", 1, 2, 10000, "nfgt07"), ("Purple Beanie Skelly", 1, 2, 10000, "nfgt08"), ("Red Beanie Skelly", 1, 2, 10000, "nfgt09"), ("Green Beanie Skelly", 1, 2, 10000, "nfgt10"), ("Orange Rich Skelly", 1, 3, 15000, "nfgt11"), ("Green Rich Skelly", 1, 3, 15000, "nfgt12"), ("Teal Rich Skelly", 1, 3, 15000, "nfgt13"), ("Blue Rich Skelly", 1, 3, 15000, "nfgt14"), ("Purple Rich Skelly", 1, 3, 15000, "nfgt15"), ("Pink Bow Skelly", 1, 4, 20000, "nfgt16"), ("Red Bow Skelly", 1, 4, 20000, "nfgt17"), ("Yellow Bow Skelly", 1, 4, 20000, "nfgt18"), ("Green Bow Skelly", 1, 4, 20000, "nfgt19"), ("Purple Bow Skelly", 1, 4, 20000, "nfgt20"), ("Golden Rare Skelly", 1, 5, 500000, "nfgt21"), ("Cursed Skelly", 1, 6, 1, "nfgt22");

INSERT INTO artist
    (fName, lName, handle)
    VALUES ("Eric", "Bennett", "Mil4Dev");

INSERT INTO rarity
    (rarity_name)
    VALUES ("Basic"), ("Uncommon"), ("Rare"), ("Super Rare"), ("Ultra Rare"), ("Cursed");

INSERT INTO user
    (username, full_name, email, password)
    VALUES ("username", "user", "user@fakeemailsite.com", "password1");