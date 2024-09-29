import { transformNamesToFileNames } from '../utils';
export const contestants = [
	{
		img: 'https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQf4mtA2CUDB0a7uJbOz-GT0Bv5Djf5_-iIUgrJsXErJFqaB30PtWLEQaB4MGC1Yer-lL42fgArRwO6k3MI9-cZiOgi5n_zfbL4S_Cmy8L-S50RLL9jYcJIaH62neNHAb4IpLNpLl1FuT9F4EpeD0Q6qS.jpg?r=cf4',
		name: 'Bohdan',
		age: '36',
		occupation: 'Tech sales',
		desc: "A proud immigrant and Ukrainian refugee, Bohdan says he's beyond grateful to now be living what he considers the American dream. “My parents brought me to [this country], so I think I've made them proud by fulfilling what they came here to do,” he says. Any future partner of Bohdan must embrace his history and unique upbringing because it “gives [people] a more complete look” at what he values and where he's come from. The former Marine was previously married for five years, which he considers the craziest thing he's done for love. “I ignored some red flags because I was in love,” he says. Since then, Bohdanhas become crystal clear about what he's searching for thanks to the power of time and therapy. But picky eaters need not apply. “If you're just eating chicken nuggets all day and not open to trying other foods, then I don't want it.”",
		gender: 'M'
	},
	{
		img: 'https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQa99PjA9TkBudeNkNQcOyacPNIDp2UwOt4BFeievbIOprqz7SB829xhy_GNP2gWZX5Dna2LcHMa0jUR5MKk1VGNxPtZHdVfmkCnavjS8YCeLWo8xux6M29Xvgx_GMq4jGcRBbGtHgHtY7NZHiaEWey9b.jpg?r=2bf',
		name: 'David',
		age: '29',
		occupation: 'Project manager',
		desc: "For the past six years, former Navy officer David has been feeling a bit, well, at sea when it comes to dating. “I've constantly been away and even then I've been close to proposing, only to fall short because of the logistical difficulties of long distance,” he says. Now that David has hung up his sailor's cap, he's settled back on land in a new city and ready to be both physically and emotionally available for love. “I want to find my person, delete the dating apps, and just start living my life with the love of my life,” he adds. But any future partner who wants to get serious with David must respect the No.1 woman in his life. “The key to my heart is a woman who can get my mother's definite approval.”",
		gender: 'M'
	},
	{
		img: 'https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQRkQx9wOSYMcmBvQ7Y9QUtSgZ5-7BWPyuu-0G0rNPpYGnHuLMVKqiJg5r9oT0gkcibYGvWiGcExhKlKS9M8R4lhScPwTOLCXxSrXDeYjtqrXnUMfc25h7SrWrdr4tjBxYsDUbeI4aQKrBA-by8NVh55V.jpg?r=84f',
		name: 'Garrett',
		age: '33',
		occupation: 'Quantum physicist',
		desc: "The only real catch Garrett reeled in over the past few years came from the water during his weekend spearfishing adventures. “I have not had any luck on the dating scene,” he says. “I've worked myself into this corner where I don't put any effort to meet women.” Now he's casting a wider net to prioritize his love life after realizing a long term relationship is what he's really after. As a driven quantum scientist, Garrett is used to leading with his head, but he's ready to dive heart first into the experiment. If an outdoorsy, confident, and down-to-earth woman is waiting on the other side of the pods, he'll get down on one knee and propose sight unseen.",
		gender: 'M'
	},
	{
		img: 'https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQe8ECIPAM8mKxaQ5byLFJlCclWxB2-AIt_wsiCpS5e9bPnpfukM8Flpt4XKaLNMhzX86nx0JlLrO_xLpCRyrkS9XBhltdamNxmGWKfx4bknjsob_azT3CrDC_cRK7MuYrginPiuPsiMV6l5isyJumjGV.jpg?r=22c',
		name: 'Jason',
		age: '30',
		occupation: 'Loan officer',
		desc: "Heading into the experiment, Jason isn't sure if he's ever truly been in love before. And it's not for a lack of trying, as he admits to “wasting time on the wrong girls” he knew he'd never marry. “I've been very timid and not entirely put myself out there,” he says. But now that Jason is in his 30s, he's developed a sincere longing to find a soulmate with whom he can start a family — and make his mom happy in the process. As for what he's looking for, “somewhat proper” and “definitely intellectual” women who appreciate the stable life Jason's built for himself — including a booming rental business — will fit the bill. But Jason knows he's going to have to put work aside sometimes for the right person, and respond to their texts from time to time. “My worst habit is being a terrible texter,” he says. “I'm not great at communicating when I'm busy.\"",
		gender: 'M'
	},
	{
		img: 'https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQQoPf9aWd8JE8POT74waI5N3q_bdExIwUfdlpFfn1PnIkk9BLT-iTELS631UB98sW5FS0qqc8BS0OKMzcHRyEHiilIls9rVLSVotWm4_xmtBPwIl2rTst17Go6SIx07C6EpzMFUT3ERHrWquSJw72OQL.jpg?r=e4c',
		name: 'Leo',
		age: '31',
		occupation: 'Art dealer',
		desc: "Successful and sophisticated Leo spends his days running his family's growing art dealing business. But when he clocks out of work, Leo likes to get in touch with his spiritual side. “I'm really into yoga and meditating,” he says. “I have a real crunchy part to me which people don't often see day-to-day.” His ideal partner would vibe on the same level — and if she happens to laugh at his goofy jokes, even better. Leo tends to gravitate toward “girly girls” in real life, but he's leaving his usual type behind to let the experiment work its magic. In fact, he'll do just about anything to break the cycle of bars, dating apps, and superficial dates he's been stuck in to find someone who values a meaningful connection.",
		gender: 'M'
	},
	{
		img: 'https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQbx73KC2CZokJZCo25jjQ9VdIHtxn8C7L8lQpl3CKjl3u6jPkZcpKfnukvgwaLc1XFRYKbfg-nCiYOjgkq-jdyJm9FCLuCUMNWF2_S38Ysd2YDM-ScTsIxXaX4mZxQH2FW_ZcC0euyiia94o41B2OMa8.jpg?r=b3d',
		name: 'Nick D.',
		age: '29',
		occupation: 'Real estate agent',
		desc: "Former all-American college football player Nick retired his cleats when his dreams of playing in the NFL came to an end. But after building a stable real estate career and investing in his own happiness, he's set his eyes on a new goal. “I'm the perfect version of myself right now, and the next step in this journey is to find the perfect wife,” he says. While Nick isn't attracted to a specific type of woman physically, ambition and confidence are major turn-ons because his ideal partner won't need him to feel complete. “I don't want someone who's going to latch onto me and ride my wave,” he says. “I want someone who's going to provide value to my life and I want to do the same for them.”",
		gender: 'M'
	},
	{
		img: 'https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQQOl2I0SCSPvlksfjyXoytcOHrtCFVVTZ-EPth6N4OaC6pMkNArGy50RSfA8_tyxgTHgRGDRP4OP65AZmfH5b0LlWahvgZ5-a7uVllL64YeQX05cMs5AVnJh_f6CBJnEbTvTwhfObomcSLDdiItmghhw.jpg?r=8f4',
		name: 'Nick P.',
		age: '31',
		occupation: 'Commercial real estate brokerage',
		desc: "Proud dad Nick is a hopeless romantic who's looking to switch up his dating strategy to find a future wife in the pods. “I've only formed deep connections with women who've checked off the physical box,” he says. “I've been looking for ‘the one' through the wrong lens.” Now he wants to be emotionally fulfilled in a long-lasting relationship with a woman who will fully embrace him — and his 9-year-old. “He's my why,” Nick says about his child. “Every step he takes, every amount he grows, in any fashion, I am completely tickled.” And if all else fails, he'll just tap into the force to guide him through the experiment's highs and lows. “I'm a huge Star Wars guy. People hate, but it's the best movie series ever.”",
		gender: 'M'
	},
	{
		img: 'https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQTUhANnSrpRTH0qHEEsXUaOxYi4MHJxIQqFkSS2AsbxiIuqgZvkKmEITfd4DDi3J8qGFrKIFQsLgdDctGEh9vXKWCz9rRp8jHCaYD5bcjpqlA0NaU2idT3L7FwT2_6TLoIYLafYohGEBs3hFvQwBPZd-.jpg?r=f15',
		name: 'Perry',
		age: '31',
		occupation: 'Realtor',
		desc: "Six months as a single guy in DC has left Perry seeking other options for finding a lifelong partner. “It is the type of town where you get asked out on LinkedIn,” he says. “I've been dating for years, trying to find that special person.” And when he has met someone on a traditional dating app, the experience hasn't been what he expected. “I showed up to an online dating date, and she was a completely different person,” he recalls. “I just went on with it and we had a nice time. I didn't ever call out the elephant in the room.” But nothing — not even a catfish — will stop Perry's pursuit of love, as he has always dreamed of getting married and starting his own family. And whoever locks down Perry in the pods can look forward to a lifetime of breakfast treats. “I am great at baking bagels,” he says. “Sesame, everything, poppy seed — really whatever you want.”",
		gender: 'M'
	},
	{
		img: 'https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQSN6sFESFYvXnhcOJXTEYN6EPEpgudA4WS9EODso49fjbe-A1XC-WqPDK_ns7adPk05dsBb4RY75lEpcDxuR-yfO7cLgmSVKObU-cUaTi_2p5dVx3wgJo2PQ1_zB7Jw5NDWosZFl138sKQwxFxMFd83R.jpg?r=90f',
		name: 'Ramses',
		age: '35',
		occupation: 'Program associate at justice reform nonprofit',
		desc: "Ramses hasn't felt fully understood by his past partners, so “being seen and accepted as [he is]” iswhat matters most going forward. Vulnerability is his superpower in relationships, and he hopes to meet a woman who can reciprocate the depth of emotion he has to offer. In the pods, someone “who practices empathy” will immediately grab his attention — and if so, he'll be all ears, as he counts listening as one of his best qualities. Plus, Ramses has plenty of experience with love, as he's previously been married. “My first marriage came to an end because, ultimately, we just grew in different directions, and it was what was best for both of us,” he says. Four years later, he's now healed from the divorce and entering into the experiment with an even clearer understanding of the woman with whom he wants to spend his life.",
		gender: 'M'
	},
	{
		img: 'https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQc4uMkqzDPmiIbSUZbXDSPJ3wkBgbSJFnZhS3FWtBkQsJU0jIVa-mkej_laQRcs82tZ1D39WgY5DnJvQxa2UJdyWsw5SFCR1crAUc1YbymK2wdZxh4uxP7hk49KbqOTZBXrxQcBmlGeWNLClugDgd1rO.jpg?r=98a',
		name: 'Raymond',
		age: '33',
		occupation: 'Consultant',
		desc: "Since graduating college, self-made military man Ray hasn't stayed at the same address for more than a year. But after planting roots in DC, he's done with long-distance relationships. Now Ray is searching for a lifelong partner who can appreciate all sides of his personality. “I just want people to know that I'm a complex human being,” he says. “I love that I'm multiracial, so it's kind of hard to put a tab on me.” In addition to his military service, Ray has also picked up degrees from Oxford and Yale. “As a military man, I can be shoved into a box, but actually what really helped me through that experience was being really big into musical theater in my childhood,” he says. “Stage presence translates to command presence, dance choreography translates to marching in step, and stage makeup into camouflage face paint.”",
		gender: 'M'
	},
	{
		img: 'https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQWUQc56krH9PPZStX4klAPoCbONArj1Zlxk6q1SzFXhXWhogqxCBoJiYt8P5AGVsLe9IH_LJgAtvCLK08hfFpCENuhVcl5VaHBEspzF5yd4o9Ke7g_kv1vTPUG2_fE7PNtqoh4x_FlWLyW_NqmZVH0U7.jpg?r=336',
		name: 'Stephen',
		age: '34',
		occupation: 'Electrician',
		desc: "Fun, outgoing Stephen knows all about keeping the spark alive as a professional electrician. But when it comes to love, he hasn't been able to make it work past the two-year mark, leaving him eager to find a long-lasting partnership in the pods. The former Marine says he refuses to settle because he “understands his worth” after spending the past year learning how to be the best version of himself. And, he expects the same from his future wife, as he's looking for an emotionally intelligent woman to match his energy. “My type is a woman who wants you, but doesn't need you,” he says. Exhausted by the appearance-driven DC dating scene, Stephen is now on the hunt to connect over laughs and, if he had his way, a Lord of the Rings movie marathon.",
		gender: 'M'
	},
	{
		img: 'https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQZwMeyhtpO40fg0fCl7vL8fDY90hgKQbsSQdxiQmGNg1OrvU7xvMQ4j6x51Q8SaqOXEdv7juUE7Jp5nkxlCKCIf6l23rnBHXFs73-r5eoiTdsrrYnAlTbY4UrerEkxeV3Xg0B3X84daqZrQ10nGwyJOG.jpg?r=04d',
		name: 'Tamar',
		age: '33',
		occupation: 'Video editor and animator',
		desc: "Tamar is looking to break his “single forever” mindset after riding solo for the last five years. When it comes to relationships, Tamar always seems to find the “right one” at the “worst time,” leaving him curious about less conventional dating options. In fact, he even took part in aLove Is Blind-inspired singles event for people in his hometown of Baltimore. “In the end, I didn't match with anybody, but I actually gained a good number of friendships out of it,” he says. Heading into the pods, Tamar is looking to avoid past mistakes, and connect with an independent woman who can easily integrate into his friend group. He's not big on drama queens (and vegans!), as Tamar's ex had a habit of blowing things out of proportion. “I just couldn't live with that anymore,” he says. “I like to be as drama-free in my life as possible.”",
		gender: 'M'
	},
	{
		img: 'https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQVqLgJ9gUG6oMu9653P5hBmEHjILbMw9l9EIQZK_Dz-HzoPMPDuhNoA6mlb_w4koegj5u7xVWdUd1Odm5TlRTkrlZSXxDxd-ekfbd7Z7RYi1xI3RxTEd1vucQPLuFPZVjnkkDB5K9eu45nPrVv2gtUNu.jpg?r=e04',
		name: 'Tim',
		age: '33',
		occupation: 'Web content strategist',
		desc: "Tim, a self-proclaimed old soul, has been set on marriage from a young age. But among his group of friends, his pursuit of love has become something of a running joke, as they've been waiting not-so-patiently for him to find his person. “My friends have always joked that my dating life has been like a reality show,” he says. “They're like, ‘Oh, Tim's dating someoneelse this year!' ” But he won't rest until he finds his soulmate, as Tim believes family and marriage are the most important things one can do in their lifetime. Tim believes none of his past partners have been able to fully understand him, so he's looking to break the streak with a confident and graceful Black woman who appreciates direct communication. “My exes would describe me as clear and transparent, to a fault,” he says. “I will not tell you a beautiful lie, even if you want me to.”",
		gender: 'M'
	},
	{
		img: 'https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQYVsRyIorpw8Usqi_UbyafizVQIbIOGDZYl7qOujOv63f-A5i6dRydc-r7rXZ-NhBQXTU4PP9AW76qRgNTINxrgZCC1NkKZXHfMHFFLqF6WfEAcSugBIgFu6xRpui8TIfgXZbw5nILzeUnBJeIxKDlPr.jpg?r=faf',
		name: 'Tyler',
		age: '34',
		occupation: 'Account manager',
		desc: "Make tenderhearted Tyler laugh, and you'll have his love forever, as this former military man has a habit of dating jokesters. But he's ready to get serious about dating after looking for “the one” in all the wrong places, especially within the status-obsessed DC dating scene. “I've tried to find love every other way, and I'm excited about [the experiment] because it's something different,” he says. Tyler's last relationship ended because his ex “didn't have her life together,” so now he's searching for a self-possessed woman who can match his energy. Bonus points if she's a horse girl, as Tyler would love to gallop off into the sunset with his soulmate. “I used to ride horses professionally, and now I do it for fun.”",
		gender: 'M'
	},
	{
		img: 'https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQaBAt8FWRVwHkh0CfQKS-mcdkVB_Vex8bEqtUUQYpLk4oXKVPBM17K3r4FMxQQOA00Xp_FMXJwd0FGXcpAB0wCNbSRN-LYqN4heqSQIHaNgcmpaKNpeBdS2CYVDOJisvyFrO5PxvFd5UwtbltCHpICjz.jpg?r=029',
		name: 'Alexandra',
		age: '33',
		occupation: 'Producer',
		desc: "Sure, Alexandra would love a diamond on her finger, but she's already got some precious metal of her own. “My heart is made of gold,” she says. “I can get along with literally anyone, and I'm really easy to talk to.” Unfortunately, her exes haven't exactly handled her heart with care, as both of her longest relationships have ended quite dramatically: One ex wasn't up front about his sexual orientation and another was unfaithful. “In the past, I have been attracted to what was good for me and didn't have any boundaries. Ultimately, I dated people who didn't care about my well-being.” But Alexandra isn't giving up on love, especially if a “tall and fine” gentleman who leads with compassion and confidence comes into the picture.",
		gender: 'F'
	},
	{
		img: 'https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQUSNvaLIn-SPF2C1Og1CNuX8Tb7SgCFoyULbHIzJ-jC9x5No1uf6gkcQnfsIUzmSJAb0uvAXtP3Ahs8EiDaNvq1pnk15MJ2NaH6K8aLTykv0G9uu_QAP_CZrVCwytlrq6-FrkvLlvbHOwyyPYypTpHq_.jpg?r=283',
		name: 'Ally',
		age: '31',
		occupation: 'Master esthetician',
		desc: "Ally is attracted to “tall teddy bear men with Southern charm,” but somehow ends up dating “short bald men,” so she's given up on defining her usual type. But no matter what a guy looks like, he'll go far with Ally if he leads with empathy and his communication skills are on point. After letting far too many situationships run past their expiration date, this beauty and skin-care expert isn't clogging up her feed with any more men who aren't willing to commit. “I've yet to find ‘the one' because I've settled for less than I know I deserve now,” she says. Ally is proud to come from an extremely diverse family, so she's attracted to guys who are all about cultural exploration and who enjoy eating different types of food. Oh, and if she could find a fellow Potterhead to spend the rest of her days with, that would be nice, too.",
		gender: 'F'
	},
	{
		img: 'https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQciUeVw8t7yGjlCGzT3ZIILLqUfsrW9LpY32yJASBemOuCgZ-aF5I8lgBbZKKng3EzMqLHK-9Zf5AusxAx6yypEvpfYvBf9IAI0d1HtGn2Mudk4fk5had4xJSCEwNihKnHhIgDU3sGlNkjKL8QNJAYbO.jpg?r=a5c',
		name: 'Ashley A.',
		age: '32',
		occupation: 'Marketing director',
		desc: "Ashley is a true ride-or-die for the people in her life — and she's just looking for a man to do the same. “I haven't found someone who protects my heart the way they protect their own,” she says. In past relationships, honesty and communication have been in short supply, leading Ashley to go through one former partner's phone. But now she's done playing games with love and wants to open her heart for a faith-driven guy who both appreciates her stealthy sense of humor and quiets her anxieties. “The key to my heart is being able to be soft with a man who I can trust with my heart,” she says. And, if he wouldn't mind joining her on a HomeGoods run from time to time, that just might seal the deal.",
		gender: 'F'
	},
	{
		img: 'https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQV--35JMpJeuwa9jXljOclBwKOybTTPfIUt2_2I5f37N_hlMnNkZY9vbDCjLX6-x7e1zhy8AP9g0-V7BzdEj7gsoGQcEOWQaCkTM-qoot9rpO7eii-BuVMRTVlvox-s58jWAeM87Nf4X59nY8lKTPTdv.jpg?r=33d',
		name: 'Ashley W.',
		age: '32',
		occupation: 'Health and wellness educator',
		desc: "Ashley has two sides to her: the “really girly girl” who loves glamming it upand her inner tomboy. “I like to get down and dirty and play a lot of sports,” she says. “You might think I'm prissy, but I'm very adventurous.” This dedicated middle school teacher is searching for an athletic, compassionate, and well-groomed partner to accept every part of her. And if he can pay the bills? Even better. In a past relationship, Ashley footed all the expenses. “He didn't have a car, a place to stay, or a good job, so I provided pretty much everything, but I was OK with it because I loved him,” she says. After a journey of self-acceptance during the COVID-19 pandemic, Ashley has finally embraced her confidence and raised her standards. “It took me a long time to find my worth and be at peace with my alone time.”",
		gender: 'F'
	},
	{
		img: 'https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQTvjgd0j2gKZWo2PMFLPxCMsAjV-Mx01Xj4qguJrPSX9Ut1nVdC6xAeS44HxIoqLs5sdjuzIhtn6vTbqOaNCiMvF2RhCk1Ai5bqne-u9HnGBZSd4G_cNmEtRyARDEobIxPGLve3HwFyASFnktnWdOAQd.jpg?r=a02',
		name: 'Brittany',
		age: '33',
		occupation: 'Esthetician',
		desc: "Brittany regularly collects garbage with her Baltimore-based beach clean-up organization (10,000 pounds so far!), so let's just say she has little to no patience for dating trash men. Instead, this esthetician and environmentalist is drawn to guys who are just as adventurous as she is, which has even led her to date a rock star. “I've had a crazy, crazy life,” she says. “My exes would describe me as a wild card because my interests change all the time.” Brittany has a preference for dating older men — especially if they happen to look like a “blonde Viking with long hair.” But most importantly, Brittany is seeking a real commitment with a future-oriented partner who appreciates jet-setting and stability in equal measure.",
		gender: 'F'
	},
	{
		img: 'https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQZQyDyRHBhzj5r8rLnBHgHdth8YgGsPPRshCjBOZ9iYe1j-gQuzU5W5Id81KSXvVpjo0jTYAfTDUhbm4bt3iwj2F87be3unkjAm1fv22TPxt8igSONjg6p09ziGD9ElAGDeU8rBB9V7B19LLYICq3x8-.jpg?r=fe7',
		name: 'Dylan',
		age: '30',
		occupation: 'Realtor and artist',
		desc: "The key to Dylan's heart is not only understanding her weirdness, but embracing it. “I'm that crazy fun friend people bring around to have a good time and do something out of their element,” she says. This multifaceted hustler is all about her business as a Baltimore-based real estate agent, but always makes time to tap into her artistic side— be it painting, woodworking, building furniture, or whatever creative pursuit she can channel her energy into. After years of dating chaos, Dylan says she needed to take a beat and tap back into her inner peace. “I have spent time with people I loved, then I forgot to love myself,” she explains. In the pods, Dylan hopes to meet a “motivated and goofy” guy with whom she can go the distance. And, if he can teach her how to finally ride a bike, it just might be a perfect match.",
		gender: 'F'
	},
	{
		img: 'https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQUvum1qQfSqY__KkhRPEfNlEUTZzOPc1-R2Qleg-ymkCfNAKxBv4Wtskdqk1uXOG4XkhYquLoRkNgvQHSz8GAU6ysnYdshqVnGNkWFWUNGPEy1JskeNDcNT_3eja9sZI-FRXPRQ6x-EYlttNQ3cZX4Xr.jpg?r=180',
		name: 'Hannah',
		age: '27',
		occupation: 'Medical device sales',
		desc: "Depending on who you ask, Hannah's lack of filter is either a blessing or a curse when it comes to her dating life. “I'm a very honest person,” she says. “It sometimes comes off as rude or heartless, but it's just me looking out for others' best interests. I really do have a kind heart.” After three years of being single, this self-proclaimed country girl is ready to kick her dating life into high gear and finally let someone else take control. “I can't find the love of my life from the comfort of my couch,” she says. She's hoping to make a soul connection with an ambitious man who will match her communication style and become a dog dad to her fur baby Luna. Plus, her West Virginia drawl is sure to make an impression on the guys on the other side of the pods.",
		gender: 'F'
	},
	{
		img: 'https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQbCq-X-PGYr4Hip_BfmgNr4fGPpmbPviC7-dkxYvv4OQeuem1sEEswucsOkT3RNJU4T1SDBUQBXgYXSq9mwvG2PTsJyzBRgrQoddwcE6UOXJsSc6DICKgqxx5NCmcdxjRtmH6c23Ucxje60-s-UsA54s.jpg?r=cd9',
		name: 'Katie',
		age: '36',
		occupation: 'Sports marketing manager',
		desc: "Katie worries that some may hold preconceived notions about why she's 35 and single. “People assume that I'm crazy, but I'm actually the opposite,” she says. “I'm way too cool and let everybody get away with everything.” The former college lacrosse player says she's wasted “too much time with the wrong ones,” as she has a history of chasing emotionally unavailable men and trying to turn them into the ideal partner. Working in the world of sports hasn't helped either, as she says some believe she comes off as “cold or emasculating,” though nothing could be further from the truth. “I'm a big love bug,” she says. “I want an alpha man. Someone to say,‘That's my girl, and I pick her.' I've never had anybody choose me.” And if Katie does meet the love of her life in the pods, she'll shout it from the rooftops again and again, as her worst habit is being repetitive. “I tell the same story over and over.”",
		gender: 'F'
	},
	{
		img: 'https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQdmtqahmujzoaV8Sp0RcuxoX8Zq8uEKjOJxGv-VEa5InEZZqfbx8r50f3zxu7kMCWjo6bc00XpKi5hMGneiffdo7VpRi4lOfgpcsi3dzwVpdESSHNcn3BRAQjDFejqxuysP6zSzegnnkh-VefjXi8Qme.jpg?r=4c0',
		name: 'Marissa',
		age: '32',
		occupation: 'Lawyer',
		desc: "By joiningLove Is Blind, Marissa is hoping to tug on the “invisible string” she believes connects her with her future husband. “We are still on our individual journeys, but hopefully he's here,” she says. While spending seven years in the Navy didn't exactly work wonders for her dating life, Marissa has no regrets about her military service. “That experience is the thing I'm most proud of,” she says. Since then, the recent law school graduate has prioritized her studies over just about everything else, and now she's looking to start a new chapter — hopefully with an intelligent and empathetic partner who doesn't mind her habit of burping out loud. In the past, Marissa says guys have tended to realize way too late that they were not ready for a relationship. “Men fall in love with my looks and charms, but don't take the time to really get to know me.”",
		gender: 'F'
	},
	{
		img: 'https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQZ1QEo1_FovdspE_1llvgUXkcaKkR0grqUJRWv3nxOtD1bJgwPeZDGhc4HsDs5O8ZBe-rzdX0XCqoTsVemx87JIX8oO3BdfYSVPArTSzBaYWHxyy6AEDHOqoWe5rOr7RjYqytxWOoOTlRPQ1ioYnYpg_.jpg?r=6c1',
		name: 'Monica',
		age: '37',
		occupation: 'Sales executive',
		desc: "Scroll through Monica's Instagram and you might assume she's a complete extrovert who's always at a music festival or on the dance floor. “I have a big personality and I tend to be the life of the party, but I'm also incredibly sensitive,” she says. Deep down, all Monica wants is to meet the man of her dreams and start a family, but her love life hasn't exactly gone smoothly in recent years. “The craziest thing that I've done for love is forgive a cheater,” she says. That's why finding someone who makes her feel “emotionally safe” is a top priority moving forward. And she has a big example to set as a role model for her four younger sisters. “They're my best friends, and I'm just really proud to be leading our pack.”",
		gender: 'F'
	},
	{
		img: 'https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQbiXeKQDgN1LKoJqoaSBYWeqDTk7SlJICosLiUV6tatimOvv8LOYfyRpfER-ff2lQZW3bHbgdEpb3NhPOq2Qu9C3t1XbvfyFJJkfAbxYv5rtEBFsBiIZSGes4pBd2jZHrwL2V8ZPIZthcdLdF324XuJY.jpg?r=e3a',
		name: 'Morgan',
		age: '33',
		occupation: 'Sales team lead',
		desc: "There are a few things former pageant queen Morgan wishes more people knew about her. “I'm smarter than I look, and I'm also extremely kind, open, and honest,” she says. The superficiality of modern dating and swiping away on the apps has left Morgan exhausted, as most guys these days can't match her emotional depth. “Men aren't willing to do the emotional labor to appreciate what I have to bring to a relationship,” she says. “I won't settle when my life is so fulfilling at this stage.” Her one piece of advice for the opposite sex? “Go to therapy,” she says. Morgan is done accepting the absolute bare minimum in relationships. Men — even the tall and nerdy ones she typically goes for — who aren't ready to be genuine partners on every level won't get past the first date with Morgan.",
		gender: 'F'
	},
	{
		img: 'https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQSgzGrrW5jW6cgDwLMY1qHFvfmxA4Golb8StD8nPulbg3Kt2OCMlaMTkBokrk-0zGHTdGEQ8gmygZJm0UkYAIbGMX5HuxsF9HreaOfOgWvwhNBOeVYrw95Yr9S_YWITWvsHTvHGSkNyjxpkKwKKoTpVo.jpg?r=236',
		name: 'Nina',
		age: '32',
		occupation: 'Journalist',
		desc: "Wanna be Nina's lover? Well, then you gotta get with her friends and family, including her younger sister Tara, who's also entering the experiment. “If someone doesn't fit in seamlessly with them, then it's not going to work. That's it,” she says. For the past year, Nina has been healing from the heartbreak of ending a nine-year relationship with her ex-fiancé. “I'm most proud of the way that I handled that breakup,” she says. “I've done a lot of work on myself and now I'm killing it in every aspect. I feel amazing,” she adds. Now that Nina's officially entered what she calls her “YOLO era,” she's ready to embrace everythingLove Is Blind has to offer if she can push past her pickiness. But for Nina, what matters most in dating lies in the details. “I want someone that remembers the little things that I like or I don't like and considers my feelings.”",
		gender: 'F'
	},
	{
		img: 'https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQfZ8c3q0aISyYYsOktD-cFshJ40H4QSJAAa_xIB2KtOrYHkJXlsuJHF6R7Tpl5JTTdB162349T7YlbH3xIFsCggNqgUzt8dKoBHlGv5A5z5m6paR-6v1vnStPnUNhgulq4VbR3jCqFxY7AiCJZoOGa1g.jpg?r=510',
		name: 'Tara',
		age: '29',
		occupation: 'Senior marketing manager',
		desc: "Taking a leap of faith to find love isn't exactly new territory for Tara, who's joining her sister Nina in the pods. From getting asked out by her server during a meal to almost moving to Germany for her ex-boyfriend, this social butterfly is open to all connections, no matter where they come from. Her dating experience, however, hasn't exactly given her confidence in men. “My past relationships have always been with someone who's insecure with himself and not in the right place in their life,” she says. Plus, she never seems to be on the same page with men about communication. “I'm always open to conversation — no matter how hard,” Tara says. “But my worst habit is needing to have the last word.” Lately, however, Tara describes her dating life as a bit “bland,” so she's looking to spice it up by lettingLove Is Blind work its magic.",
		gender: 'F'
	},
	{
		img: 'https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQTIZ5Jlr6zHoivs-qY10JYsBog93RJoWbOPI_zTEgsA8RtGdlvtvrZ-ZIqhBL0MJLo6LLFxuuBfXp4gTjjaJUiq4k1pvWqDj4WvHCiJg1an4m8NeuyGRlxF62qxyNK_q6ywOuV0I06PT87RoBzSXzXYS.jpg?r=613',
		name: 'Taylor',
		age: '30',
		occupation: 'Clean energy policy consultant',
		desc: "As a scientist working in clean energy, Taylor is more than familiar with experiments, but she's never encountered one quite likeLove Is Blind.For the past few years, Taylor has been prioritizing almost everything else in her life over dating, focusing on “building herself up first” before entering into a serious relationship. But she's always longed for a relationship like the one her parents have. “They've been married for 35 years and showcased how to be great partners,” she says. Now Taylor is readyto convert her love of me time to “we time” for a kind, intellectually curious, and emotionally intelligent guy. While she tends to go for tall men with an athletic build, it's what's inside that matters most. “The key to my heart,” she says, “is loving me for my mind.”",
		gender: 'F'
	},
	{
		img: 'https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQc67V314CYye_xoZ7iTz-zF134xWDRutk9gsXDeJ4X5P8E798cVybOXeLVy_B6THxfyvappqW_adPL8QIdNcUmN5FVKJ_-v1FqMoFs77c856We78eIb1AtqNAU1F_2x1umK8I1Ni9zqaSQ0u8e0JqNvs.jpg?r=668',
		name: 'Jenny',
		age: '31',
		occupation: 'Account training coordinator',
		desc: "Bubbly and energetic Jenny is at the end of her rope with the “useless and disappointing” dating scene in DC. “This is my last and final shot. I'm going to have to move after this,” she jokes. All she's ever wanted is to find a nurturing and supportive partner who can reciprocate her energy. “Men should put themselves in our shoes and feel how vulnerable it is to date,” she says. “Women put a lot more effort into it and men forget that it counts.” But Jenny doesn't want to date just anyone — she wants to find “the one,” even if he's taking his sweet time. And if he has effortless swag or “sexiness to them, even if they're nerdy,” Jenny will definitely want a second date. “I'm taking time to find the love of my life,” she says. “I want it to last forever.”",
		gender: 'F'
	}
].map((c) => ({ ...c, nameAsFileName: transformNamesToFileNames(c.name) }));
