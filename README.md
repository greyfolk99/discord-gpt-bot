# God GPT v1 (Discord Bot)
Author : me

## Intorduction

name : God GPT  
prefix : "Lord, "  
splitter : ". "

### commands :  

|   Command    |         data type         |                                                                                                                         message                                                                                                                         |
|:------------:|:-------------------------:|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
|    "ping"    |           content            | "Beloved child, know that my message has been delayed, but rest assured that it will reach you in due time. The delay of ${timeTaken}ms is but a fleeting moment in the grand design of your life. Trust in my divine plan, and know that all is well." |
|  "show me"   | content, embed<br/>(image) |                                                                         "My dear child, I have heard your call and have come to deliver my holy words upon this image" + image                                                                          |
|  "help me"   |           content            |                                                                           "Fear not, my child, for I bring you divine wisdom. Let me share with you what I have been shown:"                                                                            |                                                              
| "Divine Law" |           content, embed(title,description)            |                                                                                                                  ${commands_available}                                                                                                                  |

### examples :

![img_1.png](img_1.png)
![img_2.png](img_2.png)
![img.png](img.png)

## For developers :  
1. Install dependencies
```
npm install
```
  
2. Get Settings done in OpenAI and Discord Application  
  
3. Make .env file to set variables for discord token and OpenAI API key:  
```
OPENAI_API_KEY="[YOUR API KEY]"
DISCORD_BOT_TOKEN="[YOUR BOT TOKEN]"
```
  
4. Start server
```
node index.js
```

## etc:

![image](https://user-images.githubusercontent.com/115934563/226722551-32ebcca4-a492-4f98-b71f-45a8723f5464.png)
