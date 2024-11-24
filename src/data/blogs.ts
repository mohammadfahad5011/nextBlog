// src/data/blogs.ts

export interface Blog {
  id: number;
  imgUrl: string;
  blogTitle: string;
  authorName?: string;
  publishedTime?: string;
  blogContent?: string;
  blogSummary?: string;
  content?: Array<{
    type: string;
    value: string;
    list?: Array<{
      boldTitle?: string;
      text?: string;
    }>;
    listStyle?: string;
  }>;
}

export const blogInfo1: Blog[] = [
  {
    id: 1,
    imgUrl: "/Blog/blog-1.png",
    blogTitle: `Empowering Excellence: A Journey of Awards and Impact`,
    authorName: "Paulette Watson",
    publishedTime: "October 13, 2023",
    blogContent: `My journey has been one of passion, resilience, and advocacy. I am deeply humbled by the opportunities I’ve had to uplift Black women in tech, continuously learning and growing alongside an incredible network of inspiring individuals.`,
    blogSummary: `Throughout my career, I have found myself in esteemed company among other influential women in technology, earning a spot on the longlist of The 50 Most Influential Women in the U.K. Technology by Computer Weekly in both 2021 and 2022.`,
    content: [
      { type: "blogTitle", value: "Awards and Recognitions" },
      {
        type: "blogText",
        value: `111 Throughout my career as Paulette Watson, I have been humbled and honored to receive a series of prestigious awards and recognitions, acknowledging my commitment to excellence and impactful contributions across various domains.\n One of the earliest milestones was being recognized as a Computing IT Leader 100, which marked the beginning of a remarkable journey in the world of IT leadership and mentorship. As I continued to pave my path, the UN Women UK CSW67 Award and the KPMG Black Entrepreneur's Awards in 2022 became pivotal moments, solidifying my position as an inspirational entrepreneur driving change on a global scale.\nMy dedication to empowering lives and making a difference in communities worldwide was further celebrated when I was bestowed with the Women Changing Lives Entrepreneur Award, a testament to the significant impact of my work in promoting positive change.\nBeyond the borders of the United Kingdom, my influence and expertise were recognized internationally, earning me a spot in the coveted TOP 100 Women of The Future: Metaverse, Web3, AI. Additionally, I proudly served as a G100 Global Advisor in Engineering and Energy, where I contributed my insights and expertise to shape transformative strategies.\nAs a firm believer in the power of technology and innovation, I have also been acknowledged for my contributions to Web3 and Engineering. Recognitions such as the Wintrade Global Award for Women in Engineering, alongside being named among the Top 100 Women of the Future: Metaverse and Web 3, have been true highlights of my journey. `,
      },
      { type: "blogImage", value: "/Blog/s_blog-1.png" },
      {
        type: "blogText",
        value: `As an entrepreneur, my vision and drive to effect change have been recognized with prestigious accolades. Winning the Entrepreneur of the Year Award at the 2023 Black Tech Achievement Awards and being honored with the We are Tech Women 100 Global Award for Achievement in 2022 underscored the significant impact of my endeavors.
  
                  Acknowledgment for my leadership in driving social impact through technology was evident when I was awarded Women in IT – Social Impact of the Year 2023, further amplifying my dedication to making a difference.
  
                  Throughout my career, I have found myself in esteemed company among other influential women in technology, earning a spot on the longlist of The 50 Most Influential Women in the U.K. Technology by Computer Weekly in both 2021 and 2022.
  
                  As an individual committed to pushing boundaries and making a positive difference, I have been humbled by the nominations I received for The Women's Business Awards 2023, Women in Tech Excellence Awards ChannelC, Women & Diversity in Channel Awards, and the Caribbean Global Awards: Best in Technology and Innovation. Being recognized as a nominee reflects the lasting impact of my work and serves as a catalyst for even greater achievements.
  
                  These awards and recognitions are not just symbols of my success but also a testament to my unwavering dedication to empowering others, driving technological innovation, and promoting positive change worldwide. As I continue on this inspiring journey, I am deeply grateful to all those who have supported and believed in my vision. Together, we will strive for even greater heights, shaping a future that reflects the transformational power of determination, innovation, and purposeful action.`,
      },
    ],
  },
  {
    id: 2,
    imgUrl: "/Blog/blog-2.png",
    blogTitle: `Building a Support Network: Black women in Tech Communities`,
    authorName: "Paulette Watson",
    publishedTime: "October 13, 2023",
    blogContent: `I strive to create spaces where Black women in tech can grow professionally and develop their passion. It’s essential that we support each other to ensure more Black women thrive and succeed in this dynamic industry.`,
    blogSummary: `Through networking events and workshops, I accessed resources that enhanced my tech and communication skills while staying up-to-date with industry trends.`,
    content: [
      {
        type: "blogTitle",
        value: "Building a Supportive Network: Black Women in Tech Communities",
      },
      {
        type: "blogText",
        value: `Black women will thrive in Tech! I'm passionate about building a supportive network to unlock opportunities for black women to grow professionally and develop their passion for Tech. Joining professional communities has given me access to invaluable human capital.\nThese network communities have been transformative experiences, offering invaluable support, mentorship, and camaraderie. In this blog, I will explore the importance of networking, shine a light on black women in Tech, share upcoming events for the network, and relate my personal experience of how networking has positively impacted myself and other black women in their tech careers.`,
      },
      { type: "blogImage", value: "/Blog/s_blog-2.png" },
      { type: "blogTitle", value: "Why Networking is Important" },
      {
        type: "blogText",
        value: `Networking is a significant opportunity to connect with the right people. It enabled me to grow my professional network and inspired me to create the #BeMedigitalinclusion 12-week mentoring program. This program connects black women with experienced black professional mentors who provide guidance and support in navigating their tech careers. Networking opened doors for me to collaborate on several Tech projects, gaining global recognition. \nBeing part of the Tech community gave me a sense of belonging and removed the feeling of isolation from opportunities. An excellent example of this was when I won the KPMG Black Entrepreneurial Award and received a £25,000 cash prize. This achievement granted me access to mentoring opportunities and introduced me to incredible people who now support my success. The Redbull Amaphiko mentoring program was one of the best experiences. It provided financial support for my entrepreneurial tech journey, access to resources, and opportunities to showcase my skills. This sense of belonging was different from working in sectors dominated by white men in tech positions. \nThrough networking events and workshops, I accessed resources that enhanced my tech and communication skills while staying up-to-date with industry trends. Several communities and groups empower black women in Tech, including: \n#BeMedigitalinclusion: A program to raise one million black women and girls' aspirations in STEM and Web 3-related careers. Coding Black Females Black Girls in Tech Niyo Network's Black Codhers Bootcamp It's already there – I need to add more. Taking that step of faith is essential! Even if you fail, get up and start again. Failure only occurs when you give up. I never gave up; my successes are my failures inside out – and I am proud of them. I participated daily in Tech, joined online forums, read and wrote blogs, made videos, and actively sought mentorship. What a transformation! Look at what I have achieved! (Who remembers that song!) #BeMe. I recommend you build meaningful connections with like-minded individuals – this fosters growth, empowers you, builds resilience, and helps you overcome all challenges. Affirmation: My connections with others are steeped in good intentions.`,
      },
      {
        type: "boldTitleList",
        listStyle: "bullet",
        value: "",
        list: [
          {
            boldTitle: "BeMedigitalinclusion",
            text: "A program to raise one million black women and girls' aspirations in STEM and Web 3-related careers.",
          },
          {
            boldTitle: "Coding Black Females",
            text: "",
          },
          {
            boldTitle: "Black Girls in Tech",
            text: "",
          },
          {
            boldTitle: "Niyo Network's Black Codhers Bootcamp",
            text: "",
          },
        ],
      },
      {
        type: "blogText",
        value: `It's already there – I need to add more. Taking that step of faith is essential! Even if you fail, get up and start again. Failure only occurs when you give up. I never gave up; my successes are my failures inside out – and I am proud of them. \nI participated daily in Tech, joined online forums, read and wrote blogs, made videos, and actively sought mentorship. What a transformation! Look at what I have achieved! (Who remembers that song!) \n#BeMe. I recommend you build meaningful connections with like-minded individuals – this fosters growth, empowers you, builds resilience, and helps you overcome all challenges.`,
      },
      {
        type: "boldTitleList",
        value: "",
        list: [
          {
            boldTitle: "Affirmation",
            text: "My connections with others are steeped in good intentions.",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    imgUrl: "/Blog/blog-3.png",
    blogTitle: `Breaking Barriers: Advancing Black Women in the Tech Industry`,
    authorName: "Paulette Watson",
    publishedTime: "October 13, 2023",
    blogContent: `Advancing Black women in tech is not just a goal—it’s a movement. By challenging systemic barriers and creating inclusive opportunities, we pave the way for future leaders and innovators who will transform the tech industry.`,
    blogSummary: `Black women are victims of pay disparities, receiving far less than their white counterparts, perpetuating economic inequalities. They have also been sidelined for leadership opportunities.`,
    content: [
      {
        type: "blogTitle",
        value: "The Fourth Revolution: Empowering Black Women in Tech",
      },
      {
        type: "blogText",
        value: `The Fourth Revolution is a time of digital transformation. We are going through a process where technology changes at the speed of light. Diversity and Inclusion have been at the forefront in addressing these issues, yet black women still face many challenges and barriers in the Tech sector. \nIn this blog, we will explore the challenges black women experience daily. The #BeMedigitalinclusion initiative supports and empowers black women in their advancement. It provides strategies to disrupt biases, shed light on success stories, and calls on those reading this blog to become change leaders and champions of diversity in Tech.`,
      },
      {
        type: "blogTitle",
        value: "Challenges Faced by Black Women",
      },
      {
        type: "blogText",
        value: `Black women consistently experience gender and racial biases. Examining these challenges through an intersectional lens and considering the impact of the pandemic, you will see how these women have been further disadvantaged. Now is the time to build relationships with supportive colleagues and mentors who can help navigate challenges and offer real solutions to closing the digital skills gap.\nThere is a lack of representation of black women in the Tech sector, resulting in a limited pool to choose from. A persistent stereotypical mindset impacts black women's abilities, making it difficult for them to recognise their skills and achievements. Even when they gain access, they often struggle with imposter syndrome, feeling like they don't belong.`,
      },
      { type: "blogImage", value: "/Blog/s_blog-3.png" },
      {
        type: "blogTitle",
        value: "Pay Disparities and Leadership Opportunities",
      },
      {
        type: "blogText",
        value: `Black women are victims of pay disparities, receiving far less than their white counterparts, perpetuating economic inequalities. They have also been sidelined for leadership opportunities.`,
      },
      { type: "blogTitle", value: "Initiatives and Solutions" },
      {
        type: "blogText",
        value: `What can initiatives and organizations do to eradicate these challenges? These issues have a significant impact. Programs like #BeMedigitalinclusion and Coding Black Females, in collaboration with Tech companies, are working tirelessly to support the advancement of black women in Tech. \n #BeMedigitalinclusion empowers one million black women in STEM-related careers by offering mentorship, Tech events, networking, internships, and apprenticeship opportunities. Coding Black Females offers boot camps and networking events. Tech companies have launched Diversity & Inclusion (D&I) programs to actively recruit and support underrepresented black women.`,
      },
      { type: "blogTitle", value: "Initiatives and Solutions" },
      {
        type: "blogText",
        value:
          "Here's a way forward to overcome bias and stereotypes: \nSelf-advocacy is critical – speak up for yourself and showcase all your achievements and accomplishments, ensuring that your contributions are acknowledged and recognized.",
      },
    ],
  },
  {
    id: 4,
    imgUrl: "/Blog/blog-4.png",
    blogTitle: `Empowering Black Women in Tech: Inspiring Success Stories`,
    authorName: "Paulette Watson",
    publishedTime: "October 13, 2023",
    blogContent: `Representation matters. By highlighting success stories of Black women in tech, we empower the next generation, proving that breaking barriers and achieving success is not only possible but necessary for the growth of the industry.`,
    blogSummary: `Being the "only one" in the room can lead to isolation and hinder opportunities for mentorship and growth`,
    content: [
      {
        type: "blogTitle",
        value: "The Fourth Revolution: Empowering Black Women in Tech",
      },
      {
        type: "blogText",
        value: `The Fourth Revolution is a time of digital transformation. We are going through a process where technology changes at the speed of light. Diversity and Inclusion have been at the forefront in addressing these issues, yet black women still face many challenges and barriers in the Tech sector. \nIn this blog, we will explore the challenges black women experience daily. The #BeMedigitalinclusion initiative supports and empowers black women in their advancement. It provides strategies to disrupt biases, shed light on success stories, and calls on those reading this blog to become change leaders and champions of diversity in Tech.`,
      },
      {
        type: "blogTitle",
        value: "Challenges Faced by Black Women",
      },
      {
        type: "blogText",
        value: `Black women consistently experience gender and racial biases. Examining these challenges through an intersectional lens and considering the impact of the pandemic, you will see how these women have been further disadvantaged. Now is the time to build relationships with supportive colleagues and mentors who can help navigate challenges and offer real solutions to closing the digital skills gap.\nThere is a lack of representation of black women in the Tech sector, resulting in a limited pool to choose from. A persistent stereotypical mindset impacts black women's abilities, making it difficult for them to recognise their skills and achievements. Even when they gain access, they often struggle with imposter syndrome, feeling like they don't belong.`,
      },
      { type: "blogImage", value: "/Blog/blog-4.png" },
      {
        type: "blogTitle",
        value: "Pay Disparities and Leadership Opportunities",
      },
      {
        type: "blogText",
        value: `Black women are victims of pay disparities, receiving far less than their white counterparts, perpetuating economic inequalities. They have also been sidelined for leadership opportunities.`,
      },
      { type: "blogTitle", value: "Initiatives and Solutions" },
      {
        type: "blogText",
        value: `What can initiatives and organizations do to eradicate these challenges? These issues have a significant impact. Programs like #BeMedigitalinclusion and Coding Black Females, in collaboration with Tech companies, are working tirelessly to support the advancement of black women in Tech. \n #BeMedigitalinclusion empowers one million black women in STEM-related careers by offering mentorship, Tech events, networking, internships, and apprenticeship opportunities. Coding Black Females offers boot camps and networking events. Tech companies have launched Diversity & Inclusion (D&I) programs to actively recruit and support underrepresented black women.`,
      },
      { type: "blogTitle", value: "Initiatives and Solutions" },
      {
        type: "blogText",
        value:
          "Here's a way forward to overcome bias and stereotypes: \nSelf-advocacy is critical – speak up for yourself and showcase all your achievements and accomplishments, ensuring that your contributions are acknowledged and recognized.",
      },
    ],
  },
  {
    id: 5,
    imgUrl: "/Blog/blog-5.png",
    blogTitle: `Overcoming Challenges: Thriving as a Black Woman in a male-dominated Tech World`,
    authorName: "Paulette Watson",
    publishedTime: "October 13, 2023",
    blogContent: `Despite formidable challenges in a male-dominated field, Black women continue to excel, enriching tech with their innovation. Their resilience and contributions illuminate pathways for future leaders while confronting biases and systemic hurdles head-on.`,
    blogSummary: `Being the "only one" in the room can lead to isolation and hinder opportunities for mentorship and growth`,
    content: [
      {
        type: "blogTitle",
        value:
          "Empowering Black Women in Tech: Conquering Intersectional Challenges",
      },
      {
        type: "blogText",
        value: `Technology is reshaping our lives in countless ways. However, this growth hasn't been inclusive, with women facing significant obstacles in pursuing and excelling in tech careers. Despite these challenges, black women have enriched the industry with their invaluable contributions despite facing unique challenges and biases. \nNotable figures like Katherine Johnson, whose calculations were critical for NASA's early space missions, and Dr. Shirley Ann Jackson, a physicist and inventor, have left indelible marks. However, black women have also been historically underrepresented and excluded, consistently facing gender and racial biases that deter their entry and advancement in tech.`,
      },
      {
        type: "blogTitle",
        value: "Overcoming Intersectional Obstacles",
      },
      {
        type: "blogText",
        value: `Black women consistently experience gender and racial biases. Examining these challenges through an intersectional lens and considering the impact of the pandemic, you will see how these women have been further disadvantaged. Now is the time to build relationships with supportive colleagues and mentors who can help navigate challenges and offer real solutions to closing the digital skills gap.\nThere is a lack of representation of black women in the Tech sector, resulting in a limited pool to choose from. A persistent stereotypical mindset impacts black women's abilities, making it difficult for them to recognise their skills and achievements. Even when they gain access, they often struggle with imposter syndrome, feeling like they don't belong.`,
      },
      { type: "blogImage", value: "/Blog/s_blog-5.png" },
      {
        type: "blogTitle",
        value: "The Power of Mentorship",
      },
      {
        type: "blogText",
        value: `Leading the #BeMedigitalinclusion mentorship program, I've witnessed its benefits for young black women. Seeking mentors and role models who share similar experiences can provide crucial guidance. These mentors offer insights on navigating the industry's intricacies, helping other black women build their confidence and overcome self-doubt that often arises from systemic biases.`,
      },
      { type: "blogTitle", value: "Embracing Identity and Confidence" },
      {
        type: "blogText",
        value: `Developing resilience and confidence is paramount. Embracing one's identity, skills, and unique perspective empowers us as black women to confront imposter syndrome. It allows us to focus on our strengths, overcome doubts, and showcase our full potential.`,
      },
      { type: "blogTitle", value: "Advocating for Equal Opportunities" },
      {
        type: "blogText",
        value:
          "Negotiating equitable opportunities, like pay and career advancement, is essential for building confidence. We should be bold in advocating for ourselves, negotiating compensation, and seeking roles where our skills are recognized and valued. Overcoming societal biases requires asserting our worth and challenging disparities.",
      },
      { type: "blogTitle", value: "Acknowledging Achievements" },
      {
        type: "blogText",
        value:
          "Over the last four years, I have won awards and don't intend to stop celebrating my achievements. Acknowledging contributions helps me understand my purpose and values better, fostering a sense of accomplishment and countering societal messages that undermine our confidence.",
      },
      { type: "blogTitle", value: "Promoting Diversity and Inclusion" },
      {
        type: "blogText",
        value:
          "The Tech industry is flourishing because it has included me. Acknowledging the intersection of race and gender through initiatives like #BeMedigitalinclusion is crucial. Companies must create welcoming and supportive environments, enabling black women to excel without undue obstacles.",
      },
      { type: "blogTitle", value: "Prepared for the Future" },
      {
        type: "blogText",
        value:
          "I am prepared for the future, ready to overcome challenges and thrive. I have persistently shattered barriers, defying the odds to make my mark in tech. I've achieved this by building networks, embracing mentors, developing resilience, advocating for equal opportunities, and celebrating achievements. I am positioning myself for a brighter future and putting down my ladder for others to climb. I want to recognize all black women and celebrate their wins, inspiring future generations to thrive and excel in the dynamic world of technology.",
      },
    ],
  },
  {
    id: 6,
    imgUrl: "/Blog/blog-6.png",
    blogTitle: `Top 10 Tech Skills every Black Woman should Master`,
    authorName: "Paulette Watson",
    publishedTime: "October 13, 2023",
    blogContent: `Mastering key tech skills is essential for Black women to thrive in the industry. Areas like AI cybersecurity, cloud computing, data analytics, and coding empower them to lead, innovate, and shape the future of technology.`,
    blogSummary:
      "Continuous learning and skill-building are essential for professional growth and empowerment. Black women aspiring in tech should continually seize opportunities to enhance their skillset.",
    content: [
      {
        type: "blogText",
        value: `In today's job market, it's no secret that technical skills are more crucial than ever. Whether you're just starting your career or a seasoned professional, investing in developing and refining your technical skills is essential to stay competitive in today's fast-paced, technology-driven world. For black women in the tech industry, mastering basic skills empowers them as professionals, breaks down barriers, and contributes to a more diverse and inclusive tech landscape. \nThis post highlights the top 10 tech skills every black woman should consider mastering to thrive in various tech roles.`,
      },
      { type: "blogTitle", value: "List of Essential Tech Skills:" },
      {
        type: "boldTitleList",
        listStyle: "",
        value: "",
        list: [
          {
            boldTitle: "Programming Languages",
            text: "Proficiency in languages like Python, Java, or JavaScript opens doors to various tech roles, from software development to data analysis..",
          },
          {
            boldTitle: "Data Analysis",
            text: "Understanding how to analyze and interpret data is valuable, as data plays a crucial role in decision-making across industries. ",
          },
          {
            boldTitle: "Cloud Computing:",
            text: "With the increasing adoption of cloud services, mastering platforms like Amazon Web Services (AWS) or Microsoft Azure is essential for scalable and efficient tech solutions.",
          },
          {
            boldTitle: "Cybersecurity",
            text: "In a digitally connected world, cybersecurity is paramount. Black women with expertise in cybersecurity are in high demand to protect sensitive information and networks.",
          },
          {
            boldTitle: "User Experience (UX) Design",
            text: "UX design ensures that tech products and services are user-friendly and enjoyable, making it a valuable skill in creating successful digital experiences.",
          },
          {
            boldTitle: "Artificial Intelligence (AI) and Machine Learning (ML)",
            text: "As AI and ML continue to shape various industries, acquiring knowledge in these fields can open doors to exciting and impactful tech roles. ",
          },
          {
            boldTitle: "Mobile App Development",
            text: "With the prevalence of smartphones, mobile app development skills are highly sought after for creating innovative and accessible applications.",
          },
          {
            boldTitle: "Project Management",
            text: "Effectively managing tech projects, from planning to execution, is a critical skill for successful tech professionals.",
          },
          {
            boldTitle: "Agile Methodology",
            text: "Familiarity with Agile practices, such as Scrum or Kanban, enables black women to contribute to collaborative and adaptive tech teams.",
          },
          {
            boldTitle: "Digital Marketing",
            text: "Understanding digital marketing techniques and strategies is valuable for promoting tech products and services in today's digital age.",
          },
        ],
      },
      { type: "blogImage", value: "/Blog/s_blog-6.png" },
      { type: "blogTitle", value: "Skill Development Resources:" },
      {
        type: "blogText",
        value:
          "Fortunately, numerous online courses, workshops, and tools are available to enhance these tech skills:",
      },
      {
        type: "boldTitleList",
        listStyle: "bullet",
        value: "",
        list: [
          {
            text: "Proficiency in languages like Python, Java, or JavaScript opens doors to various tech roles, from software development to data analysis..",
          },
          {
            text: "Understanding how to analyze and interpret data is valuable, as data plays a crucial role in decision-making across industries. ",
          },
          {
            text: "With the increasing adoption of cloud services, mastering platforms like Amazon Web Services (AWS) or Microsoft Azure is essential for scalable and efficient tech solutions.",
          },
          {
            text: "In a digitally connected world, cybersecurity is paramount. Black women with expertise in cybersecurity are in high demand to protect sensitive information and networks.",
          },
        ],
      },

      { type: "blogTitle", value: "Niche Skills for Advancement:" },
      {
        type: "blogText",
        value:
          "In addition to mastering the essential tech skills, black women can consider developing niche expertise in areas such as:",
      },
      {
        type: "boldTitleList",
        listStyle: "",
        value: "",
        list: [
          {
            boldTitle: "Blockchain Technology",
            text: "Acquiring knowledge in blockchain can open doors to roles in cryptocurrency, fintech, and supply chain management.",
          },
          {
            boldTitle: "Internet of Things (IoT):",
            text: "With the rise of IoT, black women skilled in this area can contribute to creating innovative and interconnected devices.",
          },
        ],
      },

      { type: "blogTitle", value: "Moving Forward" },
      {
        type: "blogText",
        value:
          "Continuous learning and skill-building are essential for professional growth and empowerment. Black women aspiring in tech should continually seize opportunities to enhance their skill set. Invest in online courses, attend workshops, participate in hackathons, and network with like-minded individuals to stay updated with the latest tech trends and advancements. Be intentional and make it happen. Create a 30-day habit; start with just one daily task and then develop on it. It works! \nBy mastering these tech skills and staying ahead of the curve, you will excel in your careers and become leaders and trailblazers in the tech industry, fostering a more inclusive and diverse landscape for future generations. Embrace the power of education and skill development as you contribute to shaping a more inclusive and equitable tech world. Be yourself and show people who you are.",
      },
    ],
  },
];

export const blogInfo2: Blog[] = [
  {
    id: 7,
    imgUrl: "/Blog/blog-7.png",
    blogTitle: `Unmasking the Intersectionality of Police Brutality: A Call for Action through Ethical AI`,
  },
  {
    id: 8,
    imgUrl: "/Blog/blog-8.png",
    blogTitle: `Natural Language Processing in AI: A Machine comprehension of Human Language`,
  },
  {
    id: 9,
    imgUrl: "/Blog/blog-9.png",
    blogTitle: `Crypto Mining: Debunking the Myths Behind Mining Cryptocurrency`,
  },
  {
    id: 10,
    imgUrl: "/Blog/blog-10.png",
    blogTitle: `My Journey with AI-Driven Personalised Hair Care: How Myavana is Revolutionising the Black Hair Industry`,
  },
  {
    id: 11,
    imgUrl: "/Blog/blog-11.png",
    blogTitle: `Unveiling the Impact of Oppressive Algorithms on Black Women: A call for Equity`,
  },
  {
    id: 12,
    imgUrl: "/Blog/blog-12.png",
    blogTitle: `Breaking the Barriers for Black Women in AI: Moving Forward with the Global #BeMedigitalinclusion`,
  },
];
