import{N as e,l as t,s as n,t as r,m as s,P as i,T as o,n as a,p as l,o as h,q as f,r as c,a as d,u as p,v as u,w as m,x as g,y as k,z as x,A as b,e as L,i as S,B as C}from"./codemirror.js";class y{constructor(e,n,r,s,i,o,a){this.type=e,this.value=n,this.from=r,this.hash=s,this.end=i,this.children=o,this.positions=a,this.hashProp=[[t.contextHash,s]]}static create(e,t,n,r,s){return new y(e,t,n,r+(r<<8)+e+(t<<4)|0,s,[],[])}addChild(e,n){e.prop(t.contextHash)!=this.hash&&(e=new a(e.type,e.children,e.positions,e.length,this.hashProp)),this.children.push(e),this.positions.push(n)}toTree(t,n=this.end){let r=this.children.length-1;return r>=0&&(n=Math.max(n,this.positions[r]+this.children[r].length+this.from)),new a(t.types[this.type],this.children,this.positions,n-this.from).balance({makeTree:(t,n,r)=>new a(e.none,t,n,r,this.hashProp)})}}var w;!function(e){e[e.Document=1]="Document",e[e.CodeBlock=2]="CodeBlock",e[e.FencedCode=3]="FencedCode",e[e.Blockquote=4]="Blockquote",e[e.HorizontalRule=5]="HorizontalRule",e[e.BulletList=6]="BulletList",e[e.OrderedList=7]="OrderedList",e[e.ListItem=8]="ListItem",e[e.ATXHeading1=9]="ATXHeading1",e[e.ATXHeading2=10]="ATXHeading2",e[e.ATXHeading3=11]="ATXHeading3",e[e.ATXHeading4=12]="ATXHeading4",e[e.ATXHeading5=13]="ATXHeading5",e[e.ATXHeading6=14]="ATXHeading6",e[e.SetextHeading1=15]="SetextHeading1",e[e.SetextHeading2=16]="SetextHeading2",e[e.HTMLBlock=17]="HTMLBlock",e[e.LinkReference=18]="LinkReference",e[e.Paragraph=19]="Paragraph",e[e.CommentBlock=20]="CommentBlock",e[e.ProcessingInstructionBlock=21]="ProcessingInstructionBlock",e[e.Escape=22]="Escape",e[e.Entity=23]="Entity",e[e.HardBreak=24]="HardBreak",e[e.Emphasis=25]="Emphasis",e[e.StrongEmphasis=26]="StrongEmphasis",e[e.Link=27]="Link",e[e.Image=28]="Image",e[e.InlineCode=29]="InlineCode",e[e.HTMLTag=30]="HTMLTag",e[e.Comment=31]="Comment",e[e.ProcessingInstruction=32]="ProcessingInstruction",e[e.URL=33]="URL",e[e.HeaderMark=34]="HeaderMark",e[e.QuoteMark=35]="QuoteMark",e[e.ListMark=36]="ListMark",e[e.LinkMark=37]="LinkMark",e[e.EmphasisMark=38]="EmphasisMark",e[e.CodeMark=39]="CodeMark",e[e.CodeText=40]="CodeText",e[e.CodeInfo=41]="CodeInfo",e[e.LinkTitle=42]="LinkTitle",e[e.LinkLabel=43]="LinkLabel"}(w||(w={}));class A{constructor(e,t){this.start=e,this.content=t,this.marks=[],this.parsers=[]}}class I{constructor(){this.text="",this.baseIndent=0,this.basePos=0,this.depth=0,this.markers=[],this.pos=0,this.indent=0,this.next=-1}forward(){this.basePos>this.pos&&this.forwardInner()}forwardInner(){let e=this.skipSpace(this.basePos);this.indent=this.countIndent(e,this.pos,this.indent),this.pos=e,this.next=e==this.text.length?-1:this.text.charCodeAt(e)}skipSpace(e){return H(this.text,e)}reset(e){for(this.text=e,this.baseIndent=this.basePos=this.pos=this.indent=0,this.forwardInner(),this.depth=1;this.markers.length;)this.markers.pop()}moveBase(e){this.basePos=e,this.baseIndent=this.countIndent(e,this.pos,this.indent)}moveBaseColumn(e){this.baseIndent=e,this.basePos=this.findColumn(e)}addMarker(e){this.markers.push(e)}countIndent(e,t=0,n=0){for(let r=t;r<e;r++)n+=9==this.text.charCodeAt(r)?4-n%4:1;return n}findColumn(e){let t=0;for(let n=0;t<this.text.length&&n<e;t++)n+=9==this.text.charCodeAt(t)?4-n%4:1;return t}scrub(){if(!this.baseIndent)return this.text;let e="";for(let t=0;t<this.basePos;t++)e+=" ";return e+this.text.slice(this.basePos)}}function T(e,t,n){if(n.pos==n.text.length||e!=t.block&&n.indent>=t.stack[n.depth+1].value+n.baseIndent)return!0;if(n.indent>=n.baseIndent+4)return!1;let r=(e.type==w.OrderedList?X:R)(n,t,!1);return r>0&&(e.type!=w.BulletList||N(n,t,!1)<0)&&n.text.charCodeAt(n.pos+r-1)==e.value}const B={[w.Blockquote]:(e,t,n)=>62==n.next&&(n.markers.push(ce(w.QuoteMark,t.lineStart+n.pos,t.lineStart+n.pos+1)),n.moveBase(n.pos+(E(n.text.charCodeAt(n.pos+1))?2:1)),e.end=t.lineStart+n.text.length,!0),[w.ListItem]:(e,t,n)=>!(n.indent<n.baseIndent+e.value&&n.next>-1)&&(n.moveBaseColumn(n.baseIndent+e.value),!0),[w.OrderedList]:T,[w.BulletList]:T,[w.Document]:()=>!0};function E(e){return 32==e||9==e||10==e||13==e}function H(e,t=0){for(;t<e.length&&E(e.charCodeAt(t));)t++;return t}function M(e,t,n){for(;t>n&&E(e.charCodeAt(t-1));)t--;return t}function v(e){if(96!=e.next&&126!=e.next)return-1;let t=e.pos+1;for(;t<e.text.length&&e.text.charCodeAt(t)==e.next;)t++;if(t<e.pos+3)return-1;if(96==e.next)for(let n=t;n<e.text.length;n++)if(96==e.text.charCodeAt(n))return-1;return t}function P(e){return 62!=e.next?-1:32==e.text.charCodeAt(e.pos+1)?2:1}function N(e,t,n){if(42!=e.next&&45!=e.next&&95!=e.next)return-1;let r=1;for(let t=e.pos+1;t<e.text.length;t++){let n=e.text.charCodeAt(t);if(n==e.next)r++;else if(!E(n))return-1}return n&&45==e.next&&D(e)>-1&&e.depth==t.stack.length||r<3?-1:1}function O(e,t){for(let n=e.stack.length-1;n>=0;n--)if(e.stack[n].type==t)return!0;return!1}function R(e,t,n){return 45!=e.next&&43!=e.next&&42!=e.next||e.pos!=e.text.length-1&&!E(e.text.charCodeAt(e.pos+1))||!(!n||O(t,w.BulletList)||e.skipSpace(e.pos+2)<e.text.length)?-1:1}function X(e,t,n){let r=e.pos,s=e.next;for(;s>=48&&s<=57;){if(r++,r==e.text.length)return-1;s=e.text.charCodeAt(r)}return r==e.pos||r>e.pos+9||46!=s&&41!=s||r<e.text.length-1&&!E(e.text.charCodeAt(r+1))||n&&!O(t,w.OrderedList)&&(e.skipSpace(r+1)==e.text.length||r>e.pos+1||49!=e.next)?-1:r+1-e.pos}function z(e){if(35!=e.next)return-1;let t=e.pos+1;for(;t<e.text.length&&35==e.text.charCodeAt(t);)t++;if(t<e.text.length&&32!=e.text.charCodeAt(t))return-1;let n=t-e.pos;return n>6?-1:n}function D(e){if(45!=e.next&&61!=e.next||e.indent>=e.baseIndent+4)return-1;let t=e.pos+1;for(;t<e.text.length&&e.text.charCodeAt(t)==e.next;)t++;let n=t;for(;t<e.text.length&&E(e.text.charCodeAt(t));)t++;return t==e.text.length?n:-1}const $=/^[ \t]*$/,j=/-->/,q=/\?>/,F=[[/^<(?:script|pre|style)(?:\s|>|$)/i,/<\/(?:script|pre|style)>/i],[/^\s*<!--/,j],[/^\s*<\?/,q],[/^\s*<![A-Z]/,/>/],[/^\s*<!\[CDATA\[/,/\]\]>/],[/^\s*<\/?(?:address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h1|h2|h3|h4|h5|h6|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul)(?:\s|\/?>|$)/i,$],[/^\s*(?:<\/[a-z][\w-]*\s*>|<[a-z][\w-]*(\s+[a-z:_][\w-.]*(?:\s*=\s*(?:[^\s"'=<>`]+|'[^']*'|"[^"]*"))?)*\s*>)\s*$/i,$]];function U(e,t,n){if(60!=e.next)return-1;let r=e.text.slice(e.pos);for(let e=0,t=F.length-(n?1:0);e<t;e++)if(F[e][0].test(r))return e;return-1}function Q(e,t){let n=e.countIndent(t,e.pos,e.indent),r=e.countIndent(e.skipSpace(t),t,n);return r>=n+5?n+1:r}function Z(e,t,n){let r=e.length-1;r>=0&&e[r].to==t&&e[r].type==w.CodeText?e[r].to=n:e.push(ce(w.CodeText,t,n))}const _={LinkReference:void 0,IndentedCode(e,t){let n=t.baseIndent+4;if(t.indent<n)return!1;let r=t.findColumn(n),s=e.lineStart+r,i=e.lineStart+t.text.length,o=[],a=[];for(Z(o,s,i);e.nextLine()&&t.depth>=e.stack.length;)if(t.pos==t.text.length){Z(a,e.lineStart-1,e.lineStart);for(let e of t.markers)a.push(e)}else{if(t.indent<n)break;{if(a.length){for(let e of a)e.type==w.CodeText?Z(o,e.from,e.to):o.push(e);a=[]}Z(o,e.lineStart-1,e.lineStart);for(let e of t.markers)o.push(e);i=e.lineStart+t.text.length;let n=e.lineStart+t.findColumn(t.baseIndent+4);n<i&&Z(o,n,i)}}return a.length&&(a=a.filter((e=>e.type!=w.CodeText)),a.length&&(t.markers=a.concat(t.markers))),e.addNode(e.buffer.writeElements(o,-s).finish(w.CodeBlock,i-s),s),!0},FencedCode(e,t){let n=v(t);if(n<0)return!1;let r=e.lineStart+t.pos,s=t.next,i=n-t.pos,o=t.skipSpace(n),a=M(t.text,t.text.length,o),l=[ce(w.CodeMark,r,r+i)];o<a&&l.push(ce(w.CodeInfo,e.lineStart+o,e.lineStart+a));for(let n=!0;e.nextLine()&&t.depth>=e.stack.length;n=!1){let r=t.pos;if(t.indent-t.baseIndent<4)for(;r<t.text.length&&t.text.charCodeAt(r)==s;)r++;if(r-t.pos>=i&&t.skipSpace(r)==t.text.length){for(let e of t.markers)l.push(e);l.push(ce(w.CodeMark,e.lineStart+t.pos,e.lineStart+r)),e.nextLine();break}{n||Z(l,e.lineStart-1,e.lineStart);for(let e of t.markers)l.push(e);let r=e.lineStart+t.basePos,s=e.lineStart+t.text.length;r<s&&Z(l,r,s)}}return e.addNode(e.buffer.writeElements(l,-r).finish(w.FencedCode,e.prevLineEnd()-r),r),!0},Blockquote(e,t){let n=P(t);return!(n<0)&&(e.startContext(w.Blockquote,t.pos),e.addNode(w.QuoteMark,e.lineStart+t.pos,e.lineStart+t.pos+1),t.moveBase(t.pos+n),null)},HorizontalRule(e,t){if(N(t,e,!1)<0)return!1;let n=e.lineStart+t.pos;return e.nextLine(),e.addNode(w.HorizontalRule,n),!0},BulletList(e,t){let n=R(t,e,!1);if(n<0)return!1;e.block.type!=w.BulletList&&e.startContext(w.BulletList,t.basePos,t.next);let r=Q(t,t.pos+1);return e.startContext(w.ListItem,t.basePos,r-t.baseIndent),e.addNode(w.ListMark,e.lineStart+t.pos,e.lineStart+t.pos+n),t.moveBaseColumn(r),null},OrderedList(e,t){let n=X(t,e,!1);if(n<0)return!1;e.block.type!=w.OrderedList&&e.startContext(w.OrderedList,t.basePos,t.text.charCodeAt(t.pos+n-1));let r=Q(t,t.pos+n);return e.startContext(w.ListItem,t.basePos,r-t.baseIndent),e.addNode(w.ListMark,e.lineStart+t.pos,e.lineStart+t.pos+n),t.moveBaseColumn(r),null},ATXHeading(e,t){let n=z(t);if(n<0)return!1;let r=t.pos,s=e.lineStart+r,i=M(t.text,t.text.length,r),o=i;for(;o>r&&t.text.charCodeAt(o-1)==t.next;)o--;o!=i&&o!=r&&E(t.text.charCodeAt(o-1))||(o=t.text.length);let a=e.buffer.write(w.HeaderMark,0,n).writeElements(e.parser.parseInline(t.text.slice(r+n+1,o),s+n+1),-s);o<t.text.length&&a.write(w.HeaderMark,o-r,i-r);let l=a.finish(w.ATXHeading1-1+n,t.text.length-r);return e.nextLine(),e.addNode(l,s),!0},HTMLBlock(e,t){let n=U(t,0,!1);if(n<0)return!1;let r=e.lineStart+t.pos,s=F[n][1],i=[],o=s!=$;for(;!s.test(t.text)&&e.nextLine();){if(t.depth<e.stack.length){o=!1;break}for(let e of t.markers)i.push(e)}o&&e.nextLine();let a=s==j?w.CommentBlock:s==q?w.ProcessingInstructionBlock:w.HTMLBlock,l=e.prevLineEnd();return e.addNode(e.buffer.writeElements(i,-r).finish(a,l-r),r),!0},SetextHeading:void 0};class V{constructor(e){this.stage=0,this.elts=[],this.pos=0,this.start=e.start,this.advance(e.content)}nextLine(e,t,n){if(-1==this.stage)return!1;let r=n.content+"\n"+t.scrub(),s=this.advance(r);return s>-1&&s<r.length&&this.complete(e,n,s)}finish(e,t){return(2==this.stage||3==this.stage)&&H(t.content,this.pos)==t.content.length&&this.complete(e,t,t.content.length)}complete(e,t,n){return e.addLeafElement(t,ce(w.LinkReference,this.start,this.start+n,this.elts)),!0}nextStage(e){return e?(this.pos=e.to-this.start,this.elts.push(e),this.stage++,!0):(!1===e&&(this.stage=-1),!1)}advance(e){for(;;){if(-1==this.stage)return-1;if(0==this.stage){if(!this.nextStage(ye(e,this.pos,this.start,!0)))return-1;if(58!=e.charCodeAt(this.pos))return this.stage=-1;this.elts.push(ce(w.LinkMark,this.pos+this.start,this.pos+this.start+1)),this.pos++}else{if(1!=this.stage){if(2==this.stage){let t=H(e,this.pos),n=0;if(t>this.pos){let r=Ce(e,t,this.start);if(r){let t=G(e,r.to-this.start);t>0&&(this.nextStage(r),n=t)}}return n||(n=G(e,this.pos)),n>0&&n<e.length?n:-1}return G(e,this.pos)}if(!this.nextStage(Se(e,H(e,this.pos),this.start)))return-1}}}}function G(e,t){for(;t<e.length;t++){let n=e.charCodeAt(t);if(10==n)break;if(!E(n))return-1}return t}class K{nextLine(e,t,n){let r=t.depth<e.stack.length?-1:D(t),s=t.next;if(r<0)return!1;let i=ce(w.HeaderMark,e.lineStart+t.pos,e.lineStart+r);return e.nextLine(),e.addLeafElement(n,ce(61==s?w.SetextHeading1:w.SetextHeading2,n.start,e.prevLineEnd(),[...e.parser.parseInline(n.content,n.start),i])),!0}finish(){return!1}}const J={LinkReference:(e,t)=>91==t.content.charCodeAt(0)?new V(t):null,SetextHeading:()=>new K},W=[(e,t)=>z(t)>=0,(e,t)=>v(t)>=0,(e,t)=>P(t)>=0,(e,t)=>R(t,e,!0)>=0,(e,t)=>X(t,e,!0)>=0,(e,t)=>N(t,e,!0)>=0,(e,t)=>U(t,0,!0)>=0],Y={text:"",end:0};class ee{constructor(e,t,n,r){this.parser=e,this.input=t,this.ranges=r,this.line=new I,this.atEnd=!1,this.dontInject=new Set,this.stoppedAt=null,this.rangeI=0,this.to=r[r.length-1].to,this.lineStart=this.absoluteLineStart=this.absoluteLineEnd=r[0].from,this.block=y.create(w.Document,0,this.lineStart,0,0),this.stack=[this.block],this.fragments=n.length?new Te(n,t):null,this.readLine()}get parsedPos(){return this.absoluteLineStart}advance(){if(null!=this.stoppedAt&&this.absoluteLineStart>this.stoppedAt)return this.finish();let{line:e}=this;for(;;){for(;e.depth<this.stack.length;)this.finishContext();for(let t of e.markers)this.addNode(t.type,t.from,t.to);if(e.pos<e.text.length)break;if(!this.nextLine())return this.finish()}if(this.fragments&&this.reuseFragment(e.basePos))return null;e:for(;;){for(let t of this.parser.blockParsers)if(t){let n=t(this,e);if(0!=n){if(1==n)return null;e.forward();continue e}}break}let t=new A(this.lineStart+e.pos,e.text.slice(e.pos));for(let e of this.parser.leafBlockParsers)if(e){let n=e(this,t);n&&t.parsers.push(n)}e:for(;this.nextLine()&&e.pos!=e.text.length;){if(e.indent<e.baseIndent+4)for(let n of this.parser.endLeafBlock)if(n(this,e,t))break e;for(let n of t.parsers)if(n.nextLine(this,e,t))return null;t.content+="\n"+e.scrub();for(let n of e.markers)t.marks.push(n)}return this.finishLeaf(t),null}stopAt(e){if(null!=this.stoppedAt&&this.stoppedAt<e)throw new RangeError("Can't move stoppedAt forward");this.stoppedAt=e}reuseFragment(e){if(!this.fragments.moveTo(this.absoluteLineStart+e,this.absoluteLineStart)||!this.fragments.matches(this.block.hash))return!1;let t=this.fragments.takeNodes(this);if(!t)return!1;let n=t,r=this.absoluteLineStart+t;for(let e=1;e<this.ranges.length;e++){let t=this.ranges[e-1].to,s=this.ranges[e].from;t>=this.lineStart&&s<r&&(n-=s-t)}return this.lineStart+=n,this.absoluteLineStart+=t,this.moveRangeI(),this.absoluteLineStart<this.to?(this.lineStart++,this.absoluteLineStart++,this.readLine()):(this.atEnd=!0,this.readLine()),!0}get depth(){return this.stack.length}parentType(e=this.depth-1){return this.parser.nodeSet.types[this.stack[e].type]}nextLine(){return this.lineStart+=this.line.text.length,this.absoluteLineEnd>=this.to?(this.absoluteLineStart=this.absoluteLineEnd,this.atEnd=!0,this.readLine(),!1):(this.lineStart++,this.absoluteLineStart=this.absoluteLineEnd+1,this.moveRangeI(),this.readLine(),!0)}moveRangeI(){for(;this.rangeI<this.ranges.length-1&&this.absoluteLineStart>=this.ranges[this.rangeI].to;)this.rangeI++,this.absoluteLineStart=Math.max(this.absoluteLineStart,this.ranges[this.rangeI].from)}scanLine(e){let t=Y;if(t.end=e,e>=this.to)t.text="";else if(t.text=this.lineChunkAt(e),t.end+=t.text.length,this.ranges.length>1){let e=this.absoluteLineStart,n=this.rangeI;for(;this.ranges[n].to<t.end;){n++;let r=this.ranges[n].from,s=this.lineChunkAt(r);t.end=r+s.length,t.text=t.text.slice(0,this.ranges[n-1].to-e)+s,e=t.end-t.text.length}}return t}readLine(){let{line:e}=this,{text:t,end:n}=this.scanLine(this.absoluteLineStart);for(this.absoluteLineEnd=n,e.reset(t);e.depth<this.stack.length;e.depth++){let t=this.stack[e.depth],n=this.parser.skipContextMarkup[t.type];if(!n)throw new Error("Unhandled block context "+w[t.type]);if(!n(t,this,e))break;e.forward()}}lineChunkAt(e){let t,n=this.input.chunk(e);if(this.input.lineChunks)t="\n"==n?"":n;else{let e=n.indexOf("\n");t=e<0?n:n.slice(0,e)}return e+t.length>this.to?t.slice(0,this.to-e):t}prevLineEnd(){return this.atEnd?this.lineStart:this.lineStart-1}startContext(e,t,n=0){this.block=y.create(e,n,this.lineStart+t,this.block.hash,this.lineStart+this.line.text.length),this.stack.push(this.block)}startComposite(e,t,n=0){this.startContext(this.parser.getNodeType(e),t,n)}addNode(e,t,n){"number"==typeof e&&(e=new a(this.parser.nodeSet.types[e],ae,ae,(null!=n?n:this.prevLineEnd())-t)),this.block.addChild(e,t-this.block.from)}addElement(e){this.block.addChild(e.toTree(this.parser.nodeSet),e.from-this.block.from)}addLeafElement(e,t){this.addNode(this.buffer.writeElements(Ae(t.children,e.marks),-t.from).finish(t.type,t.to-t.from),t.from)}finishContext(){let e=this.stack.pop(),t=this.stack[this.stack.length-1];t.addChild(e.toTree(this.parser.nodeSet),e.from-t.from),this.block=t}finish(){for(;this.stack.length>1;)this.finishContext();return this.addGaps(this.block.toTree(this.parser.nodeSet,this.lineStart))}addGaps(e){return this.ranges.length>1?te(this.ranges,0,e.topNode,this.ranges[0].from,this.dontInject):e}finishLeaf(e){for(let t of e.parsers)if(t.finish(this,e))return;let t=Ae(this.parser.parseInline(e.content,e.start),e.marks);this.addNode(this.buffer.writeElements(t,-e.start).finish(w.Paragraph,e.content.length),e.start)}elt(e,t,n,r){return"string"==typeof e?ce(this.parser.getNodeType(e),t,n,r):new fe(e,t)}get buffer(){return new le(this.parser.nodeSet)}}function te(e,t,n,r,s){if(s.has(n.tree))return n.tree;let i=e[t].to,o=[],l=[],h=n.from+r;function f(n,s){for(;s?n>=i:n>i;){let s=e[t+1].from-i;r+=s,n+=s,t++,i=e[t].to}}for(let a=n.firstChild;a;a=a.nextSibling){f(a.from+r,!0);let n,c=a.from+r;a.to+r>i?(n=te(e,t,a,r,s),f(a.to+r,!1)):n=a.toTree(),o.push(n),l.push(c-h)}return f(n.to+r,!1),new a(n.type,o,l,n.to+r-h,n.tree?n.tree.propValues:void 0)}class ne extends i{constructor(e,t,n,r,s,i,o,a,l){super(),this.nodeSet=e,this.blockParsers=t,this.leafBlockParsers=n,this.blockNames=r,this.endLeafBlock=s,this.skipContextMarkup=i,this.inlineParsers=o,this.inlineNames=a,this.wrappers=l,this.nodeTypes=Object.create(null);for(let t of e.types)this.nodeTypes[t.name]=t.id}createParse(e,t,n){let r=new ee(this,e,t,n);for(let s of this.wrappers)r=s(r,e,t,n);return r}configure(r){let i=se(r);if(!i)return this;let{nodeSet:a,skipContextMarkup:l}=this,h=this.blockParsers.slice(),f=this.leafBlockParsers.slice(),c=this.blockNames.slice(),d=this.inlineParsers.slice(),p=this.inlineNames.slice(),u=this.endLeafBlock.slice(),m=this.wrappers;if(re(i.defineNodes)){l=Object.assign({},l);let r,h=a.types.slice();for(let n of i.defineNodes){let{name:s,block:i,composite:a,style:f}="string"==typeof n?{name:n}:n;if(h.some((e=>e.name==s)))continue;a&&(l[h.length]=(e,t,n)=>a(t,n,e.value));let c=h.length,d=a?["Block","BlockContext"]:i?c>=w.ATXHeading1&&c<=w.SetextHeading2?["Block","LeafBlock","Heading"]:["Block","LeafBlock"]:void 0;h.push(e.define({id:c,name:s,props:d&&[[t.group,d]]})),f&&(r||(r={}),Array.isArray(f)||f instanceof o?r[s]=f:Object.assign(r,f))}a=new s(h),r&&(a=a.extend(n(r)))}if(re(i.props)&&(a=a.extend(...i.props)),re(i.remove))for(let e of i.remove){let t=this.blockNames.indexOf(e),n=this.inlineNames.indexOf(e);t>-1&&(h[t]=f[t]=void 0),n>-1&&(d[n]=void 0)}if(re(i.parseBlock))for(let e of i.parseBlock){let t=c.indexOf(e.name);if(t>-1)h[t]=e.parse,f[t]=e.leaf;else{let t=e.before?ie(c,e.before):e.after?ie(c,e.after)+1:c.length-1;h.splice(t,0,e.parse),f.splice(t,0,e.leaf),c.splice(t,0,e.name)}e.endLeaf&&u.push(e.endLeaf)}if(re(i.parseInline))for(let e of i.parseInline){let t=p.indexOf(e.name);if(t>-1)d[t]=e.parse;else{let t=e.before?ie(p,e.before):e.after?ie(p,e.after)+1:p.length-1;d.splice(t,0,e.parse),p.splice(t,0,e.name)}}return i.wrap&&(m=m.concat(i.wrap)),new ne(a,h,f,c,u,l,d,p,m)}getNodeType(e){let t=this.nodeTypes[e];if(null==t)throw new RangeError(`Unknown node type '${e}'`);return t}parseInline(e,t){let n=new we(this,e,t);e:for(let e=t;e<n.end;){let t=n.char(e);for(let r of this.inlineParsers)if(r){let s=r(n,t,e);if(s>=0){e=s;continue e}}e++}return n.resolveMarkers(0)}}function re(e){return null!=e&&e.length>0}function se(e){if(!Array.isArray(e))return e;if(0==e.length)return null;let t=se(e[0]);if(1==e.length)return t;let n=se(e.slice(1));if(!n||!t)return t||n;let r=(e,t)=>(e||ae).concat(t||ae),s=t.wrap,i=n.wrap;return{props:r(t.props,n.props),defineNodes:r(t.defineNodes,n.defineNodes),parseBlock:r(t.parseBlock,n.parseBlock),parseInline:r(t.parseInline,n.parseInline),remove:r(t.remove,n.remove),wrap:s?i?(e,t,n,r)=>s(i(e,t,n,r),t,n,r):s:i}}function ie(e,t){let n=e.indexOf(t);if(n<0)throw new RangeError(`Position specified relative to unknown parser ${t}`);return n}let oe=[e.none];for(let n,r=1;n=w[r];r++)oe[r]=e.define({id:r,name:n,props:r>=w.Escape?[]:[[t.group,r in B?["Block","BlockContext"]:["Block","LeafBlock"]]]});const ae=[];class le{constructor(e){this.nodeSet=e,this.content=[],this.nodes=[]}write(e,t,n,r=0){return this.content.push(e,t,n,4+4*r),this}writeElements(e,t=0){for(let n of e)n.writeTo(this,t);return this}finish(e,t){return a.build({buffer:this.content,nodeSet:this.nodeSet,reused:this.nodes,topID:e,length:t})}}class he{constructor(e,t,n,r=ae){this.type=e,this.from=t,this.to=n,this.children=r}writeTo(e,t){let n=e.content.length;e.writeElements(this.children,t),e.content.push(this.type,this.from+t,this.to+t,e.content.length+4-n)}toTree(e){return new le(e).writeElements(this.children,-this.from).finish(this.type,this.to-this.from)}}class fe{constructor(e,t){this.tree=e,this.from=t}get to(){return this.from+this.tree.length}get type(){return this.tree.type.id}get children(){return ae}writeTo(e,t){e.nodes.push(this.tree),e.content.push(e.nodes.length-1,this.from+t,this.to+t,-1)}toTree(){return this.tree}}function ce(e,t,n,r){return new he(e,t,n,r)}const de={resolve:"Emphasis",mark:"EmphasisMark"},pe={resolve:"Emphasis",mark:"EmphasisMark"},ue={},me={};class ge{constructor(e,t,n,r){this.type=e,this.from=t,this.to=n,this.side=r}}const ke="!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";let xe=/[!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~\xA1\u2010-\u2027]/;try{xe=new RegExp("[\\p{Pc}|\\p{Pd}|\\p{Pe}|\\p{Pf}|\\p{Pi}|\\p{Po}|\\p{Ps}]","u")}catch(e){}const be={Escape(e,t,n){if(92!=t||n==e.end-1)return-1;let r=e.char(n+1);for(let t=0;t<32;t++)if(ke.charCodeAt(t)==r)return e.append(ce(w.Escape,n,n+2));return-1},Entity(e,t,n){if(38!=t)return-1;let r=/^(?:#\d+|#x[a-f\d]+|\w+);/i.exec(e.slice(n+1,n+31));return r?e.append(ce(w.Entity,n,n+1+r[0].length)):-1},InlineCode(e,t,n){if(96!=t||n&&96==e.char(n-1))return-1;let r=n+1;for(;r<e.end&&96==e.char(r);)r++;let s=r-n,i=0;for(;r<e.end;r++)if(96==e.char(r)){if(i++,i==s&&96!=e.char(r+1))return e.append(ce(w.InlineCode,n,r+1,[ce(w.CodeMark,n,n+s),ce(w.CodeMark,r+1-s,r+1)]))}else i=0;return-1},HTMLTag(e,t,n){if(60!=t||n==e.end-1)return-1;let r=e.slice(n+1,e.end),s=/^(?:[a-z][-\w+.]+:[^\s>]+|[a-z\d.!#$%&'*+/=?^_`{|}~-]+@[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?(?:\.[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?)*)>/i.exec(r);if(s)return e.append(ce(w.URL,n,n+1+s[0].length));let i=/^!--[^>](?:-[^-]|[^-])*?-->/i.exec(r);if(i)return e.append(ce(w.Comment,n,n+1+i[0].length));let o=/^\?[^]*?\?>/.exec(r);if(o)return e.append(ce(w.ProcessingInstruction,n,n+1+o[0].length));let a=/^(?:![A-Z][^]*?>|!\[CDATA\[[^]*?\]\]>|\/\s*[a-zA-Z][\w-]*\s*>|\s*[a-zA-Z][\w-]*(\s+[a-zA-Z:_][\w-.:]*(?:\s*=\s*(?:[^\s"'=<>`]+|'[^']*'|"[^"]*"))?)*\s*(\/\s*)?>)/.exec(r);return a?e.append(ce(w.HTMLTag,n,n+1+a[0].length)):-1},Emphasis(e,t,n){if(95!=t&&42!=t)return-1;let r=n+1;for(;e.char(r)==t;)r++;let s=e.slice(n-1,n),i=e.slice(r,r+1),o=xe.test(s),a=xe.test(i),l=/\s|^$/.test(s),h=/\s|^$/.test(i),f=!h&&(!a||l||o),c=!l&&(!o||h||a),d=f&&(42==t||!c||o),p=c&&(42==t||!f||a);return e.append(new ge(95==t?de:pe,n,r,(d?1:0)|(p?2:0)))},HardBreak(e,t,n){if(92==t&&10==e.char(n+1))return e.append(ce(w.HardBreak,n,n+2));if(32==t){let t=n+1;for(;32==e.char(t);)t++;if(10==e.char(t)&&t>=n+2)return e.append(ce(w.HardBreak,n,t+1))}return-1},Link:(e,t,n)=>91==t?e.append(new ge(ue,n,n+1,1)):-1,Image:(e,t,n)=>33==t&&91==e.char(n+1)?e.append(new ge(me,n,n+2,1)):-1,LinkEnd(e,t,n){if(93!=t)return-1;for(let t=e.parts.length-1;t>=0;t--){let r=e.parts[t];if(r instanceof ge&&(r.type==ue||r.type==me)){if(!r.side||e.skipSpace(r.to)==n&&!/[(\[]/.test(e.slice(n+1,n+2)))return e.parts[t]=null,-1;let s=e.takeContent(t),i=e.parts[t]=Le(e,s,r.type==ue?w.Link:w.Image,r.from,n+1);if(r.type==ue)for(let n=0;n<t;n++){let t=e.parts[n];t instanceof ge&&t.type==ue&&(t.side=0)}return i.to}}return-1}};function Le(e,t,n,r,s){let{text:i}=e,o=e.char(s),a=s;if(t.unshift(ce(w.LinkMark,r,r+(n==w.Image?2:1))),t.push(ce(w.LinkMark,s-1,s)),40==o){let n,r=e.skipSpace(s+1),o=Se(i,r-e.offset,e.offset);o&&(r=e.skipSpace(o.to),n=Ce(i,r-e.offset,e.offset),n&&(r=e.skipSpace(n.to))),41==e.char(r)&&(t.push(ce(w.LinkMark,s,s+1)),a=r+1,o&&t.push(o),n&&t.push(n),t.push(ce(w.LinkMark,r,a)))}else if(91==o){let n=ye(i,s-e.offset,e.offset,!1);n&&(t.push(n),a=n.to)}return ce(n,r,a,t)}function Se(e,t,n){if(60==e.charCodeAt(t)){for(let r=t+1;r<e.length;r++){let s=e.charCodeAt(r);if(62==s)return ce(w.URL,t+n,r+1+n);if(60==s||10==s)return!1}return null}{let r=0,s=t;for(let t=!1;s<e.length;s++){let n=e.charCodeAt(s);if(E(n))break;if(t)t=!1;else if(40==n)r++;else if(41==n){if(!r)break;r--}else 92==n&&(t=!0)}return s>t?ce(w.URL,t+n,s+n):s==e.length&&null}}function Ce(e,t,n){let r=e.charCodeAt(t);if(39!=r&&34!=r&&40!=r)return!1;let s=40==r?41:r;for(let r=t+1,i=!1;r<e.length;r++){let o=e.charCodeAt(r);if(i)i=!1;else{if(o==s)return ce(w.LinkTitle,t+n,r+1+n);92==o&&(i=!0)}}return null}function ye(e,t,n,r){for(let s=!1,i=t+1,o=Math.min(e.length,i+999);i<o;i++){let o=e.charCodeAt(i);if(s)s=!1;else{if(93==o)return!r&&ce(w.LinkLabel,t+n,i+1+n);if(r&&!E(o)&&(r=!1),91==o)return!1;92==o&&(s=!0)}}return null}class we{constructor(e,t,n){this.parser=e,this.text=t,this.offset=n,this.parts=[]}char(e){return e>=this.end?-1:this.text.charCodeAt(e-this.offset)}get end(){return this.offset+this.text.length}slice(e,t){return this.text.slice(e-this.offset,t-this.offset)}append(e){return this.parts.push(e),e.to}addDelimiter(e,t,n,r,s){return this.append(new ge(e,t,n,(r?1:0)|(s?2:0)))}addElement(e){return this.append(e)}resolveMarkers(e){for(let t=e;t<this.parts.length;t++){let n=this.parts[t];if(!(n instanceof ge&&n.type.resolve&&2&n.side))continue;let r,s=n.type==de||n.type==pe,i=n.to-n.from,o=t-1;for(;o>=e;o--){let e=this.parts[o];if(e instanceof ge&&1&e.side&&e.type==n.type&&!(s&&(1&n.side||2&e.side)&&(e.to-e.from+i)%3==0&&((e.to-e.from)%3||i%3))){r=e;break}}if(!r)continue;let a=n.type.resolve,l=[],h=r.from,f=n.to;if(s){let e=Math.min(2,r.to-r.from,i);h=r.to-e,f=n.from+e,a=1==e?"Emphasis":"StrongEmphasis"}r.type.mark&&l.push(this.elt(r.type.mark,h,r.to));for(let e=o+1;e<t;e++)this.parts[e]instanceof he&&l.push(this.parts[e]),this.parts[e]=null;n.type.mark&&l.push(this.elt(n.type.mark,n.from,f));let c=this.elt(a,h,f,l);this.parts[o]=s&&r.from!=h?new ge(r.type,r.from,h,r.side):null,(this.parts[t]=s&&n.to!=f?new ge(n.type,f,n.to,n.side):null)?this.parts.splice(t,0,c):this.parts[t]=c}let t=[];for(let n=e;n<this.parts.length;n++){let e=this.parts[n];e instanceof he&&t.push(e)}return t}findOpeningDelimiter(e){for(let t=this.parts.length-1;t>=0;t--){let n=this.parts[t];if(n instanceof ge&&n.type==e)return t}return null}takeContent(e){let t=this.resolveMarkers(e);return this.parts.length=e,t}skipSpace(e){return H(this.text,e-this.offset)+this.offset}elt(e,t,n,r){return"string"==typeof e?ce(this.parser.getNodeType(e),t,n,r):new fe(e,t)}}function Ae(e,t){if(!t.length)return e;if(!e.length)return t;let n=e.slice(),r=0;for(let e of t){for(;r<n.length&&n[r].to<e.to;)r++;if(r<n.length&&n[r].from<e.from){let t=n[r];t instanceof he&&(n[r]=new he(t.type,t.from,t.to,Ae(t.children,[e])))}else n.splice(r++,0,e)}return n}const Ie=[w.CodeBlock,w.ListItem,w.OrderedList,w.BulletList];class Te{constructor(e,t){this.fragments=e,this.input=t,this.i=0,this.fragment=null,this.fragmentEnd=-1,this.cursor=null,e.length&&(this.fragment=e[this.i++])}nextFragment(){this.fragment=this.i<this.fragments.length?this.fragments[this.i++]:null,this.cursor=null,this.fragmentEnd=-1}moveTo(e,t){for(;this.fragment&&this.fragment.to<=e;)this.nextFragment();if(!this.fragment||this.fragment.from>(e?e-1:0))return!1;if(this.fragmentEnd<0){let e=this.fragment.to;for(;e>0&&"\n"!=this.input.read(e-1,e);)e--;this.fragmentEnd=e?e-1:0}let n=this.cursor;n||(n=this.cursor=this.fragment.tree.cursor(),n.firstChild());let r=e+this.fragment.offset;for(;n.to<=r;)if(!n.parent())return!1;for(;;){if(n.from>=r)return this.fragment.from<=t;if(!n.childAfter(r))return!1}}matches(e){let n=this.cursor.tree;return n&&n.prop(t.contextHash)==e}takeNodes(e){let t=this.cursor,n=this.fragment.offset,r=this.fragmentEnd-(this.fragment.openEnd?1:0),s=e.absoluteLineStart,i=s,o=e.block.children.length,a=i,l=o;for(;;){if(t.to-n>r){if(t.type.isAnonymous&&t.firstChild())continue;break}if(e.dontInject.add(t.tree),e.addNode(t.tree,t.from-n),t.type.is("Block")&&(Ie.indexOf(t.type.id)<0?(i=t.to-n,o=e.block.children.length):(i=a,o=l,a=t.to-n,l=e.block.children.length)),!t.nextSibling())break}for(;e.block.children.length>o;)e.block.children.pop(),e.block.positions.pop();return i-s}}const Be=n({"Blockquote/...":r.quote,HorizontalRule:r.contentSeparator,"ATXHeading1/... SetextHeading1/...":r.heading1,"ATXHeading2/... SetextHeading2/...":r.heading2,"ATXHeading3/...":r.heading3,"ATXHeading4/...":r.heading4,"ATXHeading5/...":r.heading5,"ATXHeading6/...":r.heading6,"Comment CommentBlock":r.comment,Escape:r.escape,Entity:r.character,"Emphasis/...":r.emphasis,"StrongEmphasis/...":r.strong,"Link/... Image/...":r.link,"OrderedList/... BulletList/...":r.list,"BlockQuote/...":r.quote,"InlineCode CodeText":r.monospace,URL:r.url,"HeaderMark HardBreak QuoteMark ListMark LinkMark EmphasisMark CodeMark":r.processingInstruction,"CodeInfo LinkLabel":r.labelName,LinkTitle:r.string,Paragraph:r.content}),Ee=new ne(new s(oe).extend(Be),Object.keys(_).map((e=>_[e])),Object.keys(_).map((e=>J[e])),Object.keys(_),W,B,Object.keys(be).map((e=>be[e])),Object.keys(be),[]);function He(e,t,n){let r=[];for(let s=e.firstChild,i=t;;s=s.nextSibling){let e=s?s.from:n;if(e>i&&r.push({from:i,to:e}),!s)break;i=s.to}return r}const Me={resolve:"Strikethrough",mark:"StrikethroughMark"},ve={defineNodes:[{name:"Strikethrough",style:{"Strikethrough/...":r.strikethrough}},{name:"StrikethroughMark",style:r.processingInstruction}],parseInline:[{name:"Strikethrough",parse(e,t,n){if(126!=t||126!=e.char(n+1)||126==e.char(n+2))return-1;let r=e.slice(n-1,n),s=e.slice(n+2,n+3),i=/\s|^$/.test(r),o=/\s|^$/.test(s),a=xe.test(r),l=xe.test(s);return e.addDelimiter(Me,n,n+2,!o&&(!l||i||a),!i&&(!a||o||l))},after:"Emphasis"}]};function Pe(e,t,n=0,r,s=0){let i=0,o=!0,a=-1,l=-1,h=!1,f=()=>{r.push(e.elt("TableCell",s+a,s+l,e.parser.parseInline(t.slice(a,l),s+a)))};for(let c=n;c<t.length;c++){let n=t.charCodeAt(c);124!=n||h?(h||32!=n&&9!=n)&&(a<0&&(a=c),l=c+1):((!o||a>-1)&&i++,o=!1,r&&(a>-1&&f(),r.push(e.elt("TableDelimiter",c+s,c+s+1))),a=l=-1),h=!h&&92==n}return a>-1&&(i++,r&&f()),i}function Ne(e,t){for(let n=t;n<e.length;n++){let t=e.charCodeAt(n);if(124==t)return!0;92==t&&n++}return!1}const Oe=/^\|?(\s*:?-+:?\s*\|)+(\s*:?-+:?\s*)?$/;class Re{constructor(){this.rows=null}nextLine(e,t,n){if(null==this.rows){let r;if(this.rows=!1,(45==t.next||58==t.next||124==t.next)&&Oe.test(r=t.text.slice(t.pos))){let s=[];Pe(e,n.content,0,s,n.start)==Pe(e,r,t.pos)&&(this.rows=[e.elt("TableHeader",n.start,n.start+n.content.length,s),e.elt("TableDelimiter",e.lineStart+t.pos,e.lineStart+t.text.length)])}}else if(this.rows){let n=[];Pe(e,t.text,t.pos,n,e.lineStart),this.rows.push(e.elt("TableRow",e.lineStart+t.pos,e.lineStart+t.text.length,n))}return!1}finish(e,t){return!!this.rows&&(e.addLeafElement(t,e.elt("Table",t.start,t.start+t.content.length,this.rows)),!0)}}const Xe={defineNodes:[{name:"Table",block:!0},{name:"TableHeader",style:{"TableHeader/...":r.heading}},"TableRow",{name:"TableCell",style:r.content},{name:"TableDelimiter",style:r.processingInstruction}],parseBlock:[{name:"Table",leaf:(e,t)=>Ne(t.content,0)?new Re:null,endLeaf(e,t,n){if(n.parsers.some((e=>e instanceof Re))||!Ne(t.text,t.basePos))return!1;let r=e.scanLine(e.absoluteLineEnd+1).text;return Oe.test(r)&&Pe(e,t.text,t.basePos)==Pe(e,r,t.basePos)},before:"SetextHeading"}]};class ze{nextLine(){return!1}finish(e,t){return e.addLeafElement(t,e.elt("Task",t.start,t.start+t.content.length,[e.elt("TaskMarker",t.start,t.start+3),...e.parser.parseInline(t.content.slice(3),t.start+3)])),!0}}const De=[Xe,{defineNodes:[{name:"Task",block:!0,style:r.list},{name:"TaskMarker",style:r.atom}],parseBlock:[{name:"TaskList",leaf:(e,t)=>/^\[[ xX]\]/.test(t.content)&&"ListItem"==e.parentType().name?new ze:null,after:"SetextHeading"}]},ve];function $e(e,t,n){return(r,s,i)=>{if(s!=e||r.char(i+1)==e)return-1;let o=[r.elt(n,i,i+1)];for(let s=i+1;s<r.end;s++){let a=r.char(s);if(a==e)return r.addElement(r.elt(t,i,s+1,o.concat(r.elt(n,s,s+1))));if(92==a&&o.push(r.elt("Escape",s,2+s++)),E(a))break}return-1}}const je={defineNodes:[{name:"Superscript",style:r.special(r.content)},{name:"SuperscriptMark",style:r.processingInstruction}],parseInline:[{name:"Superscript",parse:$e(94,"Superscript","SuperscriptMark")}]},qe={defineNodes:[{name:"Subscript",style:r.special(r.content)},{name:"SubscriptMark",style:r.processingInstruction}],parseInline:[{name:"Subscript",parse:$e(126,"Subscript","SubscriptMark")}]},Fe={defineNodes:[{name:"Emoji",style:r.character}],parseInline:[{name:"Emoji",parse(e,t,n){let r;return 58==t&&(r=/^[a-zA-Z_0-9]+:/.exec(e.slice(n+1,e.end)))?e.addElement(e.elt("Emoji",n,n+1+r[0].length)):-1}}]},Ue=m({commentTokens:{block:{open:"\x3c!--",close:"--\x3e"}}}),Qe=new t,Ze=Ee.configure({props:[L.add((e=>!e.is("Block")||e.is("Document")||null!=_e(e)?void 0:(e,t)=>({from:t.doc.lineAt(e.from).to,to:e.to}))),Qe.add(_e),S.add({Document:()=>null}),C.add({Document:Ue})]});function _e(e){let t=/^(?:ATX|Setext)Heading(\d)$/.exec(e.name);return t?+t[1]:void 0}function Ve(e,t){let n=e;for(;;){let e,r=n.nextSibling;if(!r||null!=(e=_e(r.type))&&e<=t)break;n=r}return n.to}const Ge=g.of(((e,t,n)=>{for(let r=f(e).resolveInner(n,-1);r&&!(r.from<t);r=r.parent){let e=r.type.prop(Qe);if(null==e)continue;let t=Ve(r,e);if(t>n)return{from:n,to:t}}return null}));function Ke(e){return new h(Ue,e,[Ge],"markdown")}const Je=Ke(Ze),We=Ke(Ze.configure([De,qe,je,Fe]));class Ye{constructor(e,t,n,r,s,i,o){this.node=e,this.from=t,this.to=n,this.spaceBefore=r,this.spaceAfter=s,this.type=i,this.item=o}blank(e,t=!0){let n=this.spaceBefore+("Blockquote"==this.node.name?">":"");if(null!=e){for(;n.length<e;)n+=" ";return n}for(let e=this.to-this.from-n.length-this.spaceAfter.length;e>0;e--)n+=" ";return n+(t?this.spaceAfter:"")}marker(e,t){let n="OrderedList"==this.node.name?String(+tt(this.item,e)[2]+t):"";return this.spaceBefore+n+this.type+this.spaceAfter}}function et(e,t){let n=[];for(let t=e;t&&"Document"!=t.name;t=t.parent)"ListItem"!=t.name&&"Blockquote"!=t.name&&"FencedCode"!=t.name||n.push(t);let r=[];for(let e=n.length-1;e>=0;e--){let s,i=n[e],o=t.lineAt(i.from),a=i.from-o.from;if("FencedCode"==i.name)r.push(new Ye(i,a,a,"","","",null));else if("Blockquote"==i.name&&(s=/^[ \t]*>( ?)/.exec(o.text.slice(a))))r.push(new Ye(i,a,a+s[0].length,"",s[1],">",null));else if("ListItem"==i.name&&"OrderedList"==i.parent.name&&(s=/^([ \t]*)\d+([.)])([ \t]*)/.exec(o.text.slice(a)))){let e=s[3],t=s[0].length;e.length>=4&&(e=e.slice(0,e.length-4),t-=4),r.push(new Ye(i.parent,a,a+t,s[1],e,s[2],i))}else if("ListItem"==i.name&&"BulletList"==i.parent.name&&(s=/^([ \t]*)([-+*])([ \t]{1,4}\[[ xX]\])?([ \t]+)/.exec(o.text.slice(a)))){let e=s[4],t=s[0].length;e.length>4&&(e=e.slice(0,e.length-4),t-=4);let n=s[2];s[3]&&(n+=s[3].replace(/[xX]/," ")),r.push(new Ye(i.parent,a,a+t,s[1],e,n,i))}}return r}function tt(e,t){return/^(\s*)(\d+)(?=[.)])/.exec(t.sliceString(e.from,e.from+10))}function nt(e,t,n,r=0){for(let s=-1,i=e;;){if("ListItem"==i.name){let e=tt(i,t),o=+e[2];if(s>=0){if(o!=s+1)return;n.push({from:i.from+e[1].length,to:i.from+e[0].length,insert:String(s+2+r)})}s=o}let e=i.nextSibling;if(!e)break;i=e}}const rt=({state:e,dispatch:t})=>{let n=f(e),{doc:r}=e,s=null,i=e.changeByRange((t=>{if(!t.empty||!We.isActiveAt(e,t.from))return s={range:t};let i=t.from,o=r.lineAt(i),a=et(n.resolveInner(i,-1),r);for(;a.length&&a[a.length-1].from>i-o.from;)a.pop();if(!a.length)return s={range:t};let l=a[a.length-1];if(l.to-l.spaceAfter.length>i-o.from)return s={range:t};let h=i>=l.to-l.spaceAfter.length&&!/\S/.test(o.text.slice(l.to));if(l.item&&h){if(l.node.firstChild.to>=i||o.from>0&&!/[^\s>]/.test(r.lineAt(o.from-1).text)){let e,t=a.length>1?a[a.length-2]:null,n="";t&&t.item?(e=o.from+t.from,n=t.marker(r,1)):e=o.from+(t?t.to:0);let s=[{from:e,to:i,insert:n}];return"OrderedList"==l.node.name&&nt(l.item,r,s,-2),t&&"OrderedList"==t.node.name&&nt(t.item,r,s),{range:c.cursor(e+n.length),changes:s}}{let t="";for(let e=0,n=a.length-2;e<=n;e++)t+=a[e].blank(e<n?a[e+1].from-t.length:null,e<n);return t+=e.lineBreak,{range:c.cursor(i+t.length),changes:{from:o.from,insert:t}}}}if("Blockquote"==l.node.name&&h&&o.from){let n=r.lineAt(o.from-1),s=/>\s*$/.exec(n.text);if(s&&s.index==l.from){let r=e.changes([{from:n.from+s.index,to:n.to},{from:o.from+l.from,to:o.to}]);return{range:t.map(r),changes:r}}}let f=[];"OrderedList"==l.node.name&&nt(l.item,r,f);let d=l.item&&l.item.from<o.from,p="";if(!d||/^[\s\d.)\-+*>]*/.exec(o.text)[0].length>=l.to)for(let e=0,t=a.length-1;e<=t;e++)p+=e!=t||d?a[e].blank(e<t?a[e+1].from-p.length:null):a[e].marker(r,1);let u=i;for(;u>o.from&&/\s/.test(o.text.charAt(u-o.from-1));)u--;return p=e.lineBreak+p,f.push({from:u,to:i,insert:p}),{range:c.cursor(u+p.length),changes:f}}));return!s&&(t(e.update(i,{scrollIntoView:!0,userEvent:"input"})),!0)};function st(e){return"QuoteMark"==e.name||"ListMark"==e.name}const it=({state:e,dispatch:t})=>{let n=f(e),r=null,s=e.changeByRange((t=>{let s=t.from,{doc:i}=e;if(t.empty&&We.isActiveAt(e,t.from)){let e=i.lineAt(s),r=et(function(e,t){let n=e.resolveInner(t,-1),r=t;st(n)&&(r=n.from,n=n.parent);for(let e;e=n.childBefore(r);)if(st(e))r=e.from;else{if("OrderedList"!=e.name&&"BulletList"!=e.name)break;n=e.lastChild,r=n.to}return n}(n,s),i);if(r.length){let n=r[r.length-1],i=n.to-n.spaceAfter.length+(n.spaceAfter?1:0);if(s-e.from>i&&!/\S/.test(e.text.slice(i,s-e.from)))return{range:c.cursor(e.from+i),changes:{from:e.from+i,to:s}};if(s-e.from==i&&(!n.item||e.from<=n.item.from||!/\S/.test(e.text.slice(0,n.to)))){let r=e.from+n.from;if(n.item&&n.node.from<n.item.from&&/\S/.test(e.text.slice(n.from,n.to)))return{range:t,changes:{from:r,to:e.from+n.to,insert:n.blank(n.to-n.from)}};if(r<s)return{range:c.cursor(r),changes:{from:r,to:s}}}}}return r={range:t}}));return!r&&(t(e.update(s,{scrollIntoView:!0,userEvent:"delete"})),!0)},ot=[{key:"Enter",run:rt},{key:"Backspace",run:it}],at=k({matchClosingTags:!1});function lt(e={}){let{codeLanguages:t,defaultCodeLanguage:n,addKeymap:r=!0,base:{parser:s}=Je}=e;if(!(s instanceof ne))throw new RangeError("Base parser provided to `markdown` should be a Markdown parser");let i,o=e.extensions?[e.extensions]:[],a=[at.support];n instanceof d?(a.push(n.support),i=n.language):n&&(i=n);let h=t||i?(f=t,c=i,e=>{if(e&&f){let t=null;if(e=/\S*/.exec(e)[0],t="function"==typeof f?f(e):x.matchLanguageName(f,e,!0),t instanceof x)return t.support?t.support.language.parser:b.getSkippingParser(t.load());if(t)return t.parser}return c?c.parser:null}):void 0;var f,c;return o.push(function(e){let{codeParser:t,htmlParser:n}=e,r=l(((e,r)=>{let s=e.type.id;if(!t||s!=w.CodeBlock&&s!=w.FencedCode){if(n&&(s==w.HTMLBlock||s==w.HTMLTag))return{parser:n,overlay:He(e.node,e.from,e.to)}}else{let n="";if(s==w.FencedCode){let t=e.node.getChild(w.CodeInfo);t&&(n=r.read(t.from,t.to))}let i=t(n);if(i)return{parser:i,overlay:e=>e.type.id==w.CodeText}}return null}));return{wrap:r}}({codeParser:h,htmlParser:at.language.parser})),r&&a.push(p.high(u.of(ot))),new d(Ke(s.configure(o)),a)}export{Je as commonmarkLanguage,it as deleteMarkupBackward,rt as insertNewlineContinueMarkup,lt as markdown,ot as markdownKeymap,We as markdownLanguage};
//# sourceMappingURL=markdown.js.map
