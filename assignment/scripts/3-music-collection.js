console.log('***** Music Collection *****')
let collection = [];
let a = '';

let searArt = {
    band: 'Ray Charles',
    year: '1967'
};
let searArt2 = {
    band: 'Amaranthe',
    year: '2018'
};

function addToCollection(Title, Artist, YearPub){
    let album = {
        title: Title,
        artist: Artist,
        publish: YearPub
    };
    collection.push(album) 
    return album
}

console.log('Adding Eternal Blue by Spiritbox, Published 2021 to collection:', addToCollection( 'Eternal Blue', 'Spiritbox', '2021' ) );
console.log('Adding Verligheten by Soilwork, Published 2019 to collection:', addToCollection( 'Verkligheten', 'Soilwork', '2019' ) );
console.log('Adding War/Peace by Demon Hunter, Published 2019 to collection:', addToCollection( 'War/Peace', 'Demon Hunter', '2019' ) );
console.log('Adding Underworld by Symphony X, Published 2015 to collection:', addToCollection( 'Underworld', 'Symphony X', '2015' ) );
console.log('Adding Helix by Amaranthe, Published 2018 to collection:', addToCollection( 'Helix', 'Amaranthe', '2018' ) );
console.log('Adding Abyss by Unleash the Archers, Published 2020 to collection:', addToCollection( 'Abyss', 'Unleash The Archers', '2020' ) );

console.log(collection);

function ShowCollection (collection){
    console.log('There are', collection.length, 'albums in the collection.');
    for (i=0; i<collection.length; i++){
        //console.log(collection[i])
        console.log(collection[i].title, 'by', collection[i].artist, 'published in', collection[i].publish); 
        //kind of cool you can use the objects prameters on the array that holds the object! 
    } 
    return collection;
}
ShowCollection(collection);

function findArtist(a){
    let results = [];
    //console.log('inside function');
    for (i=0; i<collection.length; i++){
        //debugger
        if ( a === collection[i].artist ){
            //console.log('in the if');
            results.push(collection[i].artist); 
            //console.log('yes', results, 'is in the collection');
        }
        //console.log('inside loop');

    }
    return results;
}

console.log('we are looking for:', findArtist('Soilwork')); 

console.log('Adding Helsinki by Soilwork, Published 2019 to collection:', addToCollection( 'Helsinki', 'Soilwork', '2017' ) );

//debugger
console.log( findArtist('Soilwork'), 'is in the collection', findArtist('Soilwork').length, 'times' );// testing stuff, being weird
console.log('we are looking for :', findArtist('Macklemore'));

function search(obj, array){
    if (obj === undefined || array=== undefined){
        return 'enter valid properties'
    }
    //debugger;
    for(let k of array){
        //console.log(k);
        if( k.artist === obj.band && k.publish === obj.year ){
            return true;
            }
        }
    return false;
}

console.log(search(searArt, collection));
console.log(search(searArt2, collection));
console.log(search());
console.log(`  band in collection: ${search(searArt, collection) ? 'yes' : 'no'}`);
console.log(`  band in collection: ${search(searArt2, collection) ? 'yes' : 'no'}`);