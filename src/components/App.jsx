import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";
import GroupLink from "./GroupLink";
import * as unicodeEmoji from 'unicode-emoji';



const groupBy = 'category';
const omitWhere = { category: ['flags'], version: ['12.1', '13.0', '13.1'] };

// Only omitting
unicodeEmoji.getEmojis(omitWhere)



// Grouping and omitting
const emojisGrouped =  unicodeEmoji.getEmojisGroupedBy(groupBy, omitWhere);
// console.log(typeof emojisGrouped);

const emojisGroupes = Object.keys(emojisGrouped);
console.log(emojisGroupes);

function createEntry(emojiInfo) {
  return (
    <Entry
  key = {emojiInfo.id}
  emoji = {emojiInfo.emoji}
  name= {emojiInfo.name}
  description= {emojiInfo.meaning}
  />
  )

}


function App() {
  return (
    <div>
    <h1><span>Emojipedia</span></h1>
      <dl className="dictionary">
      {
      Object.keys(emojisGroupes).map((item, i) => (
        <GroupLink
           key = {i}
           id = {i}
           name = {emojisGroupes[item]}
        />
    //       <li className="listItem" key={i}>
    //           <a ><span className="input-label">{ emojisGroupes[item] }</span></a>
    //       </li>
      ))
  }
    </dl>
    </div>


  );
}

export default App;
{/* <div>

<dl className="dictionary">
{emojisGrouped.map(createEntry)}

</dl>
</div> */}
