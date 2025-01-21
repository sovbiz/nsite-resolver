# Nsite Resolver

This is a very very very basic resolver, that uses a simple index.html to illustrate the basic Nsite flow: 

### INSTRUCTIONS:

The build consists out of 2 parts :

# SIMPLE WEBSITE

1) The landing page ( a single simple html file ) you can find an example in the public folder.

Upload the file using https://bouquet.slidestr.net

Bouquet Doest not support kind 34128 for Publishing Events from uploads.

So this means that only the File Hash Name is the only way without writing your own event pipeline.
( See How it should be structured in the resolver )



# NSITE RESOLVER

2) The Nsite Resolver ( a single file where the DNS can be pointed ) 

This could be done for 2 different purposes. 

2.1) as a domain holder you could just show your own website

2.2) as a public resolver you could resolve other Nsite's from other uploaders.

#### How this repo is structured now 

Config > settings.json holds the File Hash name & the List of Blossom Servers to resolve against.

This means everytime you upload a new Simple Website you will need to update the File Hash in the settings file.



#### How it should be structured ( How it works on Cypher )

1) the Settings file should just contain your Npub from where you upload to the blossom servers

2) Lookup Kind 10063 for that Npub to find what Blossom servers you have setup.

3) Next Lookup Kind 34128 for that Npub and find the Latest index.html 

      // Look for the event with tag ["d", "index.html"]
      matchingEvent.value = Array.from(events).find((event) =>
        event.tags.some((tag) => tag[0] === "d" && tag[1] === "index.html")
      );




## Dev & Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# generate build to the /dist or .output folder
$ npm run build


```


