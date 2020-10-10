// ==UserScript==
// @name       Kittenizer
// @namespace  default
// @version    1
// @description  Replace stuff with kittens
// @copyright  nobody
// @include *
// ==/UserScript==
(function() {
var replacements, regex, key, textnodes, node, s;
textnodes = document.evaluate( "//body//text()", document, null,
XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
for (var i = 0; i < textnodes.snapshotLength; i++) {
node = textnodes.snapshotItem(i);
if(node != null && node.nodeName == '#text' && /\S/.test(node.nodeValue))
{

s = node.data;

s = s.replace( /\bDonald Trump\b/g, "Sir Kitten");
s = s.replace( /\bdonaldjtrump\b/g, "kittens");
s = s.replace( /\bDonald John Trump\b/g, "Mr. Sir Kitten");
s = s.replace( /\bPresident Trump\b/g, "Mr. Kitten");
s = s.replace( /\bPresident Donald Trump\b/g, "Mr. Sir Kitten");
s = s.replace( /\bDonald J Trump\b/g, "Mr. Sir Kitten");
s = s.replace( /\bDonald J. Trump\b/g, "Mr. Sir Kitten");
s = s.replace( /\bTrump Administration\b/g, "Kitten Kingdom");
s = s.replace( /\bTrump administration\b/g, "Kitten Kingdom");
s = s.replace( /\bIvanka Trump\b/g, "Little Kitty");
s = s.replace( /\bMelania Trump\b/g, "Feisty Kitty");
s = s.replace( /\bIvanka\b/g, "Little Kitty");
s = s.replace( /\bMelania\b/g, "Feisty Kitty");
s = s.replace( /\bivanka\b/g, "little kitty");
s = s.replace( /\bmelania\b/g, "feisty kitty");
s = s.replace( /\bDONALD TRUMP\b/g, "SIR KITTEN");
s = s.replace( /\btrump\b/g, "kitty");
s = s.replace( /\bTrump\b/g, "Kitty");
s = s.replace( /\bMAGA\b/g, "FREE THE KITTENS");
s = s.replace( /\bMake America Great Again\b/g, "Free The Kittens!");
s = s.replace( /\bKeep America Great\b/g, "Keep Kittens Free!");
s = s.replace( /\bKEEP AMERICA GREAT\b/g, "KEEP KITTENS FREE!");
s = s.replace( /\bPolitic\b/g, "Meow");
s = s.replace( /\bPolitics\b/g, "Meows");

    node.data = s;

}} })();
