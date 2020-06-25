const words = [
  {
    eng: 'ace',
    ukr: 'туз',
    definition: 'a playing card with a single spot on it, ranked as the highest card in its suit in most card games'
  }, {
    eng: 'ant',
    ukr: 'мураха',
    definition: 'a small insect typically having a sting and living in a complex social colony with one or more breeding queens'
  }, {
    eng: 'ape',
    ukr: 'мавпа',
    definition: 'a large primate that lacks a tail, including the gorilla, chimpanzees, orangutan, and gibbons'
  }, {
    eng: 'arm',
    ukr: 'мураха',
    definition: 'each of the two upper limbs of the human body from the shoulder to the hand'
  }, {
    eng: 'asp',
    ukr: 'гадюка',
    definition: 'a small southern European viper with an upturned snout'
  }, {
    eng: 'ball',
    ukr: 'м\'яч',
    definition: 'a solid or hollow spherical or egg-shaped object that is kicked, thrown, or hit in a game'
  }, {
    eng: 'bat',
    ukr: 'битка',
    definition: 'an implement with a handle and a solid surface, typically of wood, used for hitting the ball in games'
  }, {
    eng: 'bed',
    ukr: 'ліжко',
    definition: 'a piece of furniture for sleep or rest, typically a framework with a mattress'
  }, {
    eng: 'bell',
    ukr: 'дзвін',
    definition: 'a hollow metal object, typically in the shape of a deep inverted cup widening at the lip, that sounds a clear musical note when struck, especially by means of a clapper inside'
  }, {
    eng: 'bin',
    ukr: 'відро для сміття',
    definition: 'a receptacle in which to deposit rubbish'
  }, {
    eng: 'cab',
    ukr: 'таксі',
    definition: 'a taxi'
  }, {
    eng: 'cat',
    ukr: 'кіт',
    definition: 'a small domesticated carnivorous mammal with soft fur, a short snout, and retractile claws'
  }, {
    eng: 'cup',
    ukr: 'чашка',
    definition: 'a small bowl-shaped container for drinking from, typically having a handle'
  }, {
    eng: 'cry',
    ukr: 'плакати',
    definition: 'shed tears in distress, pain, or sorrow'
  }, {
    eng: 'corner',
    ukr: 'куток',
    definition: 'a place or angle where two sides or edges meet'
  }, {
    eng: 'dad',
    ukr: 'тато',
    definition: 'one\'s father'
  }, {
    eng: 'deer',
    ukr: 'олень',
    definition: 'a hoofed grazing or browsing animal, with branched bony antlers that are shed annually and typically borne only by the male'
  }, {
    eng: 'dig',
    ukr: 'копати',
    definition: 'break up and move earth with a tool'
  }, {
    eng: 'dip',
    ukr: 'опускати',
    definition: 'put or let something down quickly'
  }, {
    eng: 'dog',
    ukr: 'собака',
    definition: 'a domesticated carnivorous mammal that typically has a long snout, an acute sense of smell, non-retractile claws, and a barking, howling, or whining voice'
  }, {
    eng: 'ear',
    ukr: 'вухо',
    definition: 'the organ of hearing'
  }, {
    eng: 'eat',
    ukr: 'їсти',
    definition: 'consume food'
  }, {
    eng: 'eye',
    ukr: 'око',
    definition: 'an organs of sight'
  }, {
    eng: 'egg',
    ukr: 'яйце',
    definition: 'an oval or round object laid by a female bird'
  }, {
    eng: 'elf',
    ukr: 'ельф',
    definition: 'a supernatural creature of folk tales, typically represented as a small, delicate, elusive figure in human form with pointed ears, magical powers, and a capricious nature'
  }, {
    eng: 'fan',
    ukr: 'вентилятор',
    definition: 'an apparatus with rotating blades that creates a current of air for cooling or ventilation'
  }, {
    eng: 'far',
    ukr: 'далеко',
    definition: 'over a large expanse of space'
  }, {
    eng: 'fire',
    ukr: 'вогонь',
    definition: 'a process in which substances combine chemically with oxygen from the air and typically give out bright light, heat, and smoke'
  }, {
    eng: 'fish',
    ukr: 'риба',
    definition: 'a limbless cold-blooded vertebrate animal with gills and fins living wholly in water'
  }, {
    eng: 'fly',
    ukr: 'літати',
    definition: 'move through the air'
  }, {
    eng: 'gap',
    ukr: 'проміжок',
    definition: 'a break or hole in an object or between two objects'
  }, {
    eng: 'gem',
    ukr: 'коштовний камінь',
    definition: 'a precious or semi-precious stone, especially when cut and polished or engraved'
  }, {
    eng: 'gift',
    ukr: 'подарунок',
    definition: 'a thing given willingly to someone without payment; a present'
  }, {
    eng: 'girl',
    ukr: 'дівчина',
    definition: 'a young or relatively young woman'
  }, {
    eng: 'game',
    ukr: 'гра',
    definition: 'an activity that one engages in for amusement'
  }, {
    eng: 'hay',
    ukr: 'сіно',
    definition: 'grass that has been mown and dried for use as fodder'
  }, {
    eng: 'hug',
    ukr: 'обіймати',
    definition: 'squeeze (someone) tightly in one\'s arms'
  }, {
    eng: 'hag',
    ukr: 'відьма',
    definition: 'a witch'
  }, {
    eng: 'hat',
    ukr: 'капелюх',
    definition: 'a shaped covering for the head worn for warmth'
  }, {
    eng: 'hop',
    ukr: 'скакати',
    definition: 'move by jumping'
  }, {
    eng: 'ice',
    ukr: 'лід',
    definition: 'frozen water'
  }, {
    eng: 'idea',
    ukr: 'ідея',
    definition: 'a thought or suggestion as to a possible course of action'
  }, {
    eng: 'item',
    ukr: 'деталь',
    definition: 'an individual article or unit, especially one that is part of a list, collection, or set'
  }, {
    eng: 'inn',
    ukr: 'готель',
    definition: 'a house providing accommodation, food, and drink'
  }, {
    eng: 'ink',
    ukr: 'чорнило',
    definition: 'a coloured fluid or paste used for writing, drawing, printing, or duplicating'
  }, {
    eng: 'jam',
    ukr: 'варення',
    definition: 'a sweet spread or conserve made from fruit and sugar boiled to a thick consistency'
  }, {
    eng: 'jar',
    ukr: 'банка',
    definition: 'a wide-mouthed cylindrical container made of glass, metal or pottery'
  }, {
    eng: 'jeep',
    ukr: 'джип',
    definition: 'a small, sturdy motor vehicle with four-wheel drive'
  }, {
    eng: 'jungle',
    ukr: 'джунглі',
    definition: 'an area of land overgrown with dense forest and tangled vegetation, typically in the tropics'
  }, {
    eng: 'join',
    ukr: 'приєднатися',
    definition: 'to connect'
  }, {
    eng: 'key',
    ukr: 'ключ',
    definition: 'a small piece of shaped metal with incisions cut to fit the wards of a particular lock, which is inserted into a lock and turned to open or close it'
  }, {
    eng: 'keep',
    ukr: 'тримати',
    definition: 'have or retain possession of'
  }, {
    eng: 'king',
    ukr: 'король',
    definition: 'ruler of an independent state'
  }, {
    eng: 'knife',
    ukr: 'ніж',
    definition: 'an instrument composed of a blade fixed into a handle, used for cutting'
  }, {
    eng: 'kit',
    ukr: 'комплект',
    definition: 'a set of articles or equipment needed for a specific purpose'
  }, {
    eng: 'leaf',
    ukr: 'листок',
    definition: 'a flattened structure of a higher plant, typically green and blade-like, that is attached to a stem directly or via a stalk'
  }, {
    eng: 'leg',
    ukr: 'нога',
    definition: 'each of the limbs on which a person or animal walks and stands'
  }, {
    eng: 'long',
    ukr: 'довго',
    definition: 'lasting or taking a great amount of time'
  }, {
    eng: 'log',
    ukr: 'журнал',
    definition: 'an official record of events'
  }, {
    eng: 'lid',
    ukr: 'кришка',
    definition: 'move through the air'
  }, {
    eng: 'mail',
    ukr: 'пошта',
    definition: 'letters and parcels sent by post'
  }, {
    eng: 'map',
    ukr: 'карта',
    definition: 'a diagrammatic representation of an area of land or sea showing physical features, cities, roads, etc'
  }, {
    eng: 'matter',
    ukr: 'матерія',
    definition: '(in physics) that which occupies space and possesses rest mass, especially as distinct from energy'
  }, {
    eng: 'major',
    ukr: 'важливий',
    definition: 'important, serious, or significant'
  }, {
    eng: 'mug',
    ukr: 'кружка',
    definition: 'a large cup'
  }, {
    eng: 'nest',
    ukr: 'гніздо',
    definition: 'a structure or place made or chosen by a bird for laying eggs and sheltering its young'
  }, {
    eng: 'net',
    ukr: 'сітка',
    definition: 'an entrapping device'
  }, {
    eng: 'nut',
    ukr: 'горіх',
    definition: 'a fruit consisting of a hard or tough shell around an edible kernel'
  }, {
    eng: 'node',
    ukr: 'вузол',
    definition: 'a point in a network or diagram at which lines or pathways intersect or branch'
  }, {
    eng: 'noble',
    ukr: 'благородний',
    definition: 'having or showing fine personal qualities or high moral principles'
  }, {
    eng: 'window',
    ukr: 'вікно',
    definition: 'a transparent panel on an envelope to show an address'
  }, {
    eng: 'wind',
    ukr: 'вітер',
    definition: 'the perceptible natural movement of the air, especially in the form of a current of air blowing from a particular direction'
  }, {
    eng: 'wheel',
    ukr: 'колесо',
    definition: 'one of the round parts underneath a car, wagon, etc., that rolls and allows something to move'
  }, {
    eng: 'whistle',
    ukr: 'свист',
    definition: 'a small device that makes a very high and loud sound when a person blows air through it'
  }, {
    eng: 'wisdom',
    ukr: 'мудрість',
    definition: 'knowledge that is gained by having many experiences in life'
  }, {
    eng: 'xenolith',
    ukr: 'ксеноліт',
    definition: ' a fragment of rock differing in origin, composition, structure, etc, from the igneous rock enclosing it'
  }, {
    eng: 'xylograph',
    ukr: 'ксилограф',
    definition: 'an engraving on wood'
  }, {
    eng: 'xylophone',
    ukr: 'ксилофон',
    definition: 'a musical instrument that has a set of wooden bars of different lengths that are hit with hammers'
  }, {
    eng: 'xerox',
    ukr: 'ксерокс',
    definition: 'a xerographic copying process'
  }, {
    eng: 'xenophobe',
    ukr: 'ксенофоб',
    definition: 'a person who is fearful or contemptuous of that which is foreign, especially of strangers or of people from different countries or cultures'
  }, {
    eng: 'yesterday',
    ukr: 'вчора',
    definition: 'the day before today'
  }, {
    eng: 'youth',
    ukr: 'молодість',
    definition: 'the time when a young person has not yet become an adult'
  }, {
    eng: 'yell',
    ukr: 'крикнути',
    definition: 'to say (something) very loudly especially because you are angry, surprised, or are trying to get someone\'s attention'
  }, {
    eng: 'yard',
    ukr: 'двір',
    definition: 'an outdoor area that is next to a house and is usually covered by grass'
  }, {
    eng: 'yacht',
    ukr: 'яхта',
    definition: 'any of various relatively small, streamlined sailing or motor-driven vessels used for pleasure cruises or racing'
  }, {
    eng: 'zombie',
    ukr: 'зомбі',
    definition: 'a will-less and speechless human held to have died and been supernaturally reanimated'
  }, {
    eng: 'zodiac',
    ukr: 'зодіак',
    definition: 'eavens centered on the ecliptic that encompasses the apparent paths of all the planets and is divided into 12 constellations or signs each taken for astrological purposes to extend 30 degrees of longitude'
  }, {
    eng: 'zoo',
    ukr: 'зоопарк',
    definition: 'a place where animals are kept for public exhibition'
  }, {
    eng: 'zero',
    ukr: 'нуль',
    definition: 'the arithmetical symbol 0 or 0̸ denoting the absence of all magnitude or quantity'
  }, {
    eng: 'zone',
    ukr: 'зона',
    definition: 'an area or stretch of land having a particular characteristic, purpose, or use, or subject to particular restrictions'
  },
];

export default words;
