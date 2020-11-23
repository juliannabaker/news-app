/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  StatusBar,
} from 'react-native';
import {Colors, Typography} from './styles'

export const mockdata = [
  {
    image: "https://images.unsplash.com/photo-1527891751199-7225231a68dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    title: "Syracuse Center for Photonics and fiber optics program",
    week: "1",
    day: "Monday",
    description: "Syracuse Center for Photonics and fiber optics program, has helped Photonics go from rags to riches and has lifted the Syracuse economy out of the dirt.",
    date: "00-00-00",
    author: "Sean Neale",
    body: "Photonics is the technology of generating and harnessing light and all forms of radiant energy. Lasers used in everything from medical microsurgery to precision manufacturing qualify as photonics, as do supermarket checkout bar-code scanners and roadside equipment that shows drivers just how fast they are going. The range of products has broad applications, from communication and information processing to national defense. \n" +
      "\n" +
      "Over the last two decades, photonics has provided a solution to the chip-to-chip bandwidth problem in the electronic world by increasing the link distance between servers with higher bandwidth, far less energy and lower latency compared to electrical interconnects. One element of this revolution, silicon photonics, was advanced 25 years ago by the demonstration from State University of Syracuse and Extel of silicon laser technology. This has since triggered an explosion of this field. Extel is now delivering millions of silicon photonic transceivers for data centers all around the world.\n" +
      "\n" +
      "Information technology continues to progress at a rapid pace. However, the growing demands of data centers have pushed electrical input-output systems to their physical limit, which has created a bottleneck. Maintaining this growth will require a shift in how we built computers.\n" +
      "\n" +
      "A new discovery in silicon photonics by a collaboration of State University of Syracuse and Kalltech reveals another revolution in this field. The group managed to simplify and condense a complex optical system onto a single silicon photonic group. The achievement, featured in Nature, significantly lowers the cost of production and allows for easy integration with traditional, silicon chip production.\n" +
      "\n" +
      "As part of  an effort to spread the awareness of photonics in academia, industry, and government experts to identify and advance areas of photonics critical to maintaining US competitiveness there by increasing the economy of the state, the SCPFOP is very involved in the National Photonics and Fiber Optics Initiative (NPFOI) since 1959. It also aims to drive critical photonics technologies in US.\n" +
      "\n" +
      "In her opening remarks, US Congresswoman Janice Gunther (D-NY) said, “Syracuse’s fiber optics, photonics, and imaging industries have been quite significant parts of our local economy. Our federal government has been playing a crucial role in funding the research, development, advertisement, commercialization  of new fields, and even in these economic times I believe we must maintain this passion to these sectors that are so important to the economic development of our region and our country.”\n" +
      "\n" +
      "During the last 20 years, Rep. Jessica has secured over $980 million in federal appropriations for the State University of Syracuse’s Laboratory for Laser and fiber optics, as well as funding for projects by local companies like Exelises and Lumetronics. She has helped attract new companies to Westman Business Park to ensure the park remains a continuous source of economic growth for the region, and is currently working with great passion to attract an Institute for Manufacturing and Innovation in optics to the Syracuse area. \n" +
      "\n" +
      "More than 90 optics, photonics, and imaging companies are located within a 30 mile radius of Syracuse, and local institutions such as the State University of Syracuse’s Institute of Optics and Lasers to provide research and job training programs. This has offered 12.5% employment opportunities in the field of academia and technological innovation, which has increased the average employment by 2.9%.\n" +
      "\n" +
      "\n" +
      "A panel discussion on the importance of Syracuse's involvement in the newly-launched National Photonics and Fiber Optics Initiative (NPFOI) followed Jessica’s remarks. The panelists were: Steve Heffner, industry and market strategist for SEIP; Tom Abraham, senior advisor for the ASO; Jennifer Walter, director of the Center for Urban Innovation in the Robert Allen College at the Syracuse Institute of Technology; Steve Xavier, founder and CEO of Optophonics Corporation; and Duncan Kroger vice provost for entrepreneurship and professor of optics at the State University of Syracuse co-hosted an event at the Syracuse Museum & Science Center focusing on the economic importance of optics and photonics to Syracuse and the state of New York. This continuing research in the field of photonics could bode well for Syracuse's economy even in the future because it has proved its potential by contributing enormously to the economic growth of the region.\n",
    sources: "BrickWallCyber.com",
  },
  {
    image: "https://images.unsplash.com/photo-1527891751199-7225231a68dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    title: "Genesee Valley Park Swimming Center Undergoes Major Transformation",
    week: "1",
    day: "Wednesday",
    description: "The Genesee Valley park swimming center wants to draw more people to its activities center. ",
    date: "00-00-00",
    author: "Rimsha Marsden",
    body: "Photonics is the technology of generating and harnessing light and all forms of radiant energy. Lasers used in everything from medical microsurgery to precision manufacturing qualify as photonics, as do supermarket checkout bar-code scanners and roadside equipment that shows drivers just how fast they are going. The range of products has broad applications, from communication and information processing to national defense. \n" +
      "\n" +
      "Over the last two decades, photonics has provided a solution to the chip-to-chip bandwidth problem in the electronic world by increasing the link distance between servers with higher bandwidth, far less energy and lower latency compared to electrical interconnects. One element of this revolution, silicon photonics, was advanced 25 years ago by the demonstration from State University of Syracuse and Extel of silicon laser technology. This has since triggered an explosion of this field. Extel is now delivering millions of silicon photonic transceivers for data centers all around the world.\n" +
      "\n" +
      "Information technology continues to progress at a rapid pace. However, the growing demands of data centers have pushed electrical input-output systems to their physical limit, which has created a bottleneck. Maintaining this growth will require a shift in how we built computers.\n" +
      "\n" +
      "A new discovery in silicon photonics by a collaboration of State University of Syracuse and Kalltech reveals another revolution in this field. The group managed to simplify and condense a complex optical system onto a single silicon photonic group. The achievement, featured in Nature, significantly lowers the cost of production and allows for easy integration with traditional, silicon chip production.\n" +
      "\n" +
      "As part of  an effort to spread the awareness of photonics in academia, industry, and government experts to identify and advance areas of photonics critical to maintaining US competitiveness there by increasing the economy of the state, the SCPFOP is very involved in the National Photonics and Fiber Optics Initiative (NPFOI) since 1959. It also aims to drive critical photonics technologies in US.\n" +
      "\n" +
      "In her opening remarks, US Congresswoman Janice Gunther (D-NY) said, “Syracuse’s fiber optics, photonics, and imaging industries have been quite significant parts of our local economy. Our federal government has been playing a crucial role in funding the research, development, advertisement, commercialization  of new fields, and even in these economic times I believe we must maintain this passion to these sectors that are so important to the economic development of our region and our country.”\n" +
      "\n" +
      "During the last 20 years, Rep. Jessica has secured over $980 million in federal appropriations for the State University of Syracuse’s Laboratory for Laser and fiber optics, as well as funding for projects by local companies like Exelises and Lumetronics. She has helped attract new companies to Westman Business Park to ensure the park remains a continuous source of economic growth for the region, and is currently working with great passion to attract an Institute for Manufacturing and Innovation in optics to the Syracuse area. \n" +
      "\n" +
      "More than 90 optics, photonics, and imaging companies are located within a 30 mile radius of Syracuse, and local institutions such as the State University of Syracuse’s Institute of Optics and Lasers to provide research and job training programs. This has offered 12.5% employment opportunities in the field of academia and technological innovation, which has increased the average employment by 2.9%.\n" +
      "\n" +
      "\n" +
      "A panel discussion on the importance of Syracuse's involvement in the newly-launched National Photonics and Fiber Optics Initiative (NPFOI) followed Jessica’s remarks. The panelists were: Steve Heffner, industry and market strategist for SEIP; Tom Abraham, senior advisor for the ASO; Jennifer Walter, director of the Center for Urban Innovation in the Robert Allen College at the Syracuse Institute of Technology; Steve Xavier, founder and CEO of Optophonics Corporation; and Duncan Kroger vice provost for entrepreneurship and professor of optics at the State University of Syracuse co-hosted an event at the Syracuse Museum & Science Center focusing on the economic importance of optics and photonics to Syracuse and the state of New York. This continuing research in the field of photonics could bode well for Syracuse's economy even in the future because it has proved its potential by contributing enormously to the economic growth of the region.\n",
    sources: "BrickWallCyber.com",

  },
  {
    image: "https://images.unsplash.com/photo-1580463021123-c241356b73dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    title: "Former Rochester Film Student Turned Hollywood, Caught Driving Home After Night of Bar Hopping",
    week: "1",
    day: "Thursday",
    description: "Ryan originally from Rochester was a student at Rochester Film school.  ",
    date: "00-00-00",
    author: "Shayna Samuels",
    body: "Photonics is the technology of generating and harnessing light and all forms of radiant energy. Lasers used in everything from medical microsurgery to precision manufacturing qualify as photonics, as do supermarket checkout bar-code scanners and roadside equipment that shows drivers just how fast they are going. The range of products has broad applications, from communication and information processing to national defense. \n" +
      "\n" +
      "Over the last two decades, photonics has provided a solution to the chip-to-chip bandwidth problem in the electronic world by increasing the link distance between servers with higher bandwidth, far less energy and lower latency compared to electrical interconnects. One element of this revolution, silicon photonics, was advanced 25 years ago by the demonstration from State University of Syracuse and Extel of silicon laser technology. This has since triggered an explosion of this field. Extel is now delivering millions of silicon photonic transceivers for data centers all around the world.\n" +
      "\n" +
      "Information technology continues to progress at a rapid pace. However, the growing demands of data centers have pushed electrical input-output systems to their physical limit, which has created a bottleneck. Maintaining this growth will require a shift in how we built computers.\n" +
      "\n" +
      "A new discovery in silicon photonics by a collaboration of State University of Syracuse and Kalltech reveals another revolution in this field. The group managed to simplify and condense a complex optical system onto a single silicon photonic group. The achievement, featured in Nature, significantly lowers the cost of production and allows for easy integration with traditional, silicon chip production.\n" +
      "\n" +
      "As part of  an effort to spread the awareness of photonics in academia, industry, and government experts to identify and advance areas of photonics critical to maintaining US competitiveness there by increasing the economy of the state, the SCPFOP is very involved in the National Photonics and Fiber Optics Initiative (NPFOI) since 1959. It also aims to drive critical photonics technologies in US.\n" +
      "\n" +
      "In her opening remarks, US Congresswoman Janice Gunther (D-NY) said, “Syracuse’s fiber optics, photonics, and imaging industries have been quite significant parts of our local economy. Our federal government has been playing a crucial role in funding the research, development, advertisement, commercialization  of new fields, and even in these economic times I believe we must maintain this passion to these sectors that are so important to the economic development of our region and our country.”\n" +
      "\n" +
      "During the last 20 years, Rep. Jessica has secured over $980 million in federal appropriations for the State University of Syracuse’s Laboratory for Laser and fiber optics, as well as funding for projects by local companies like Exelises and Lumetronics. She has helped attract new companies to Westman Business Park to ensure the park remains a continuous source of economic growth for the region, and is currently working with great passion to attract an Institute for Manufacturing and Innovation in optics to the Syracuse area. \n" +
      "\n" +
      "More than 90 optics, photonics, and imaging companies are located within a 30 mile radius of Syracuse, and local institutions such as the State University of Syracuse’s Institute of Optics and Lasers to provide research and job training programs. This has offered 12.5% employment opportunities in the field of academia and technological innovation, which has increased the average employment by 2.9%.\n" +
      "\n" +
      "\n" +
      "A panel discussion on the importance of Syracuse's involvement in the newly-launched National Photonics and Fiber Optics Initiative (NPFOI) followed Jessica’s remarks. The panelists were: Steve Heffner, industry and market strategist for SEIP; Tom Abraham, senior advisor for the ASO; Jennifer Walter, director of the Center for Urban Innovation in the Robert Allen College at the Syracuse Institute of Technology; Steve Xavier, founder and CEO of Optophonics Corporation; and Duncan Kroger vice provost for entrepreneurship and professor of optics at the State University of Syracuse co-hosted an event at the Syracuse Museum & Science Center focusing on the economic importance of optics and photonics to Syracuse and the state of New York. This continuing research in the field of photonics could bode well for Syracuse's economy even in the future because it has proved its potential by contributing enormously to the economic growth of the region.\n",
    sources: "RochesterFilmStudio.com",
  },
  {
    image: "https://images.unsplash.com/photo-1580463021123-c241356b73dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    title: "Former Rochester Film Student Turned Hollywood, Caught Driving Home After Night of Bar Hopping",
    week: "2",
    day: "Monday",
    description: "Ryan originally from Rochester was a student at Rochester Film school.  ",
    date: "00-00-00",
    author: "Shayna Samuels",
    body: "Photonics is the technology of generating and harnessing light and all forms of radiant energy. Lasers used in everything from medical microsurgery to precision manufacturing qualify as photonics, as do supermarket checkout bar-code scanners and roadside equipment that shows drivers just how fast they are going. The range of products has broad applications, from communication and information processing to national defense. \n" +
      "\n" +
      "Over the last two decades, photonics has provided a solution to the chip-to-chip bandwidth problem in the electronic world by increasing the link distance between servers with higher bandwidth, far less energy and lower latency compared to electrical interconnects. One element of this revolution, silicon photonics, was advanced 25 years ago by the demonstration from State University of Syracuse and Extel of silicon laser technology. This has since triggered an explosion of this field. Extel is now delivering millions of silicon photonic transceivers for data centers all around the world.\n" +
      "\n" +
      "Information technology continues to progress at a rapid pace. However, the growing demands of data centers have pushed electrical input-output systems to their physical limit, which has created a bottleneck. Maintaining this growth will require a shift in how we built computers.\n" +
      "\n" +
      "A new discovery in silicon photonics by a collaboration of State University of Syracuse and Kalltech reveals another revolution in this field. The group managed to simplify and condense a complex optical system onto a single silicon photonic group. The achievement, featured in Nature, significantly lowers the cost of production and allows for easy integration with traditional, silicon chip production.\n" +
      "\n" +
      "As part of  an effort to spread the awareness of photonics in academia, industry, and government experts to identify and advance areas of photonics critical to maintaining US competitiveness there by increasing the economy of the state, the SCPFOP is very involved in the National Photonics and Fiber Optics Initiative (NPFOI) since 1959. It also aims to drive critical photonics technologies in US.\n" +
      "\n" +
      "In her opening remarks, US Congresswoman Janice Gunther (D-NY) said, “Syracuse’s fiber optics, photonics, and imaging industries have been quite significant parts of our local economy. Our federal government has been playing a crucial role in funding the research, development, advertisement, commercialization  of new fields, and even in these economic times I believe we must maintain this passion to these sectors that are so important to the economic development of our region and our country.”\n" +
      "\n" +
      "During the last 20 years, Rep. Jessica has secured over $980 million in federal appropriations for the State University of Syracuse’s Laboratory for Laser and fiber optics, as well as funding for projects by local companies like Exelises and Lumetronics. She has helped attract new companies to Westman Business Park to ensure the park remains a continuous source of economic growth for the region, and is currently working with great passion to attract an Institute for Manufacturing and Innovation in optics to the Syracuse area. \n" +
      "\n" +
      "More than 90 optics, photonics, and imaging companies are located within a 30 mile radius of Syracuse, and local institutions such as the State University of Syracuse’s Institute of Optics and Lasers to provide research and job training programs. This has offered 12.5% employment opportunities in the field of academia and technological innovation, which has increased the average employment by 2.9%.\n" +
      "\n" +
      "\n" +
      "A panel discussion on the importance of Syracuse's involvement in the newly-launched National Photonics and Fiber Optics Initiative (NPFOI) followed Jessica’s remarks. The panelists were: Steve Heffner, industry and market strategist for SEIP; Tom Abraham, senior advisor for the ASO; Jennifer Walter, director of the Center for Urban Innovation in the Robert Allen College at the Syracuse Institute of Technology; Steve Xavier, founder and CEO of Optophonics Corporation; and Duncan Kroger vice provost for entrepreneurship and professor of optics at the State University of Syracuse co-hosted an event at the Syracuse Museum & Science Center focusing on the economic importance of optics and photonics to Syracuse and the state of New York. This continuing research in the field of photonics could bode well for Syracuse's economy even in the future because it has proved its potential by contributing enormously to the economic growth of the region.\n",
    sources: "RochesterFilmStudio.com",
  },
  {
    image: "https://images.unsplash.com/photo-1580463021123-c241356b73dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    title: "Former Rochester Film Student Turned Hollywood, Caught Driving Home After Night of Bar Hopping",
    week: "2",
    day: "Tuesday",
    description: "Ryan originally from Rochester was a student at Rochester Film school.  ",
    date: "00-00-00",
    author: "Shayna Samuels",
    body: "Photonics is the technology of generating and harnessing light and all forms of radiant energy. Lasers used in everything from medical microsurgery to precision manufacturing qualify as photonics, as do supermarket checkout bar-code scanners and roadside equipment that shows drivers just how fast they are going. The range of products has broad applications, from communication and information processing to national defense. \n" +
      "\n" +
      "Over the last two decades, photonics has provided a solution to the chip-to-chip bandwidth problem in the electronic world by increasing the link distance between servers with higher bandwidth, far less energy and lower latency compared to electrical interconnects. One element of this revolution, silicon photonics, was advanced 25 years ago by the demonstration from State University of Syracuse and Extel of silicon laser technology. This has since triggered an explosion of this field. Extel is now delivering millions of silicon photonic transceivers for data centers all around the world.\n" +
      "\n" +
      "Information technology continues to progress at a rapid pace. However, the growing demands of data centers have pushed electrical input-output systems to their physical limit, which has created a bottleneck. Maintaining this growth will require a shift in how we built computers.\n" +
      "\n" +
      "A new discovery in silicon photonics by a collaboration of State University of Syracuse and Kalltech reveals another revolution in this field. The group managed to simplify and condense a complex optical system onto a single silicon photonic group. The achievement, featured in Nature, significantly lowers the cost of production and allows for easy integration with traditional, silicon chip production.\n" +
      "\n" +
      "As part of  an effort to spread the awareness of photonics in academia, industry, and government experts to identify and advance areas of photonics critical to maintaining US competitiveness there by increasing the economy of the state, the SCPFOP is very involved in the National Photonics and Fiber Optics Initiative (NPFOI) since 1959. It also aims to drive critical photonics technologies in US.\n" +
      "\n" +
      "In her opening remarks, US Congresswoman Janice Gunther (D-NY) said, “Syracuse’s fiber optics, photonics, and imaging industries have been quite significant parts of our local economy. Our federal government has been playing a crucial role in funding the research, development, advertisement, commercialization  of new fields, and even in these economic times I believe we must maintain this passion to these sectors that are so important to the economic development of our region and our country.”\n" +
      "\n" +
      "During the last 20 years, Rep. Jessica has secured over $980 million in federal appropriations for the State University of Syracuse’s Laboratory for Laser and fiber optics, as well as funding for projects by local companies like Exelises and Lumetronics. She has helped attract new companies to Westman Business Park to ensure the park remains a continuous source of economic growth for the region, and is currently working with great passion to attract an Institute for Manufacturing and Innovation in optics to the Syracuse area. \n" +
      "\n" +
      "More than 90 optics, photonics, and imaging companies are located within a 30 mile radius of Syracuse, and local institutions such as the State University of Syracuse’s Institute of Optics and Lasers to provide research and job training programs. This has offered 12.5% employment opportunities in the field of academia and technological innovation, which has increased the average employment by 2.9%.\n" +
      "\n" +
      "\n" +
      "A panel discussion on the importance of Syracuse's involvement in the newly-launched National Photonics and Fiber Optics Initiative (NPFOI) followed Jessica’s remarks. The panelists were: Steve Heffner, industry and market strategist for SEIP; Tom Abraham, senior advisor for the ASO; Jennifer Walter, director of the Center for Urban Innovation in the Robert Allen College at the Syracuse Institute of Technology; Steve Xavier, founder and CEO of Optophonics Corporation; and Duncan Kroger vice provost for entrepreneurship and professor of optics at the State University of Syracuse co-hosted an event at the Syracuse Museum & Science Center focusing on the economic importance of optics and photonics to Syracuse and the state of New York. This continuing research in the field of photonics could bode well for Syracuse's economy even in the future because it has proved its potential by contributing enormously to the economic growth of the region.\n",
    sources: "RochesterFilmStudio.com",
  },
]

const App: () => React$Node = () => {
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <View style={styles.headerContainer}>
          <Text style={styles.sectionTitle}>{"Today's Read"}</Text>
        </View>
        <SectionContainer title={mockdata[0].title} description={mockdata[0].description} date={mockdata[0].date} author={mockdata[0].author} image={mockdata[0].image}/>
        <View style={styles.headerContainer}>
          <Text style={styles.sectionTitle}>{"Previous Reads"}</Text>
        </View>
        <SectionContainer title={mockdata[0].title} description={mockdata[0].description} date={mockdata[0].date} author={mockdata[0].author} image={mockdata[0].image}/>
        <SectionContainer title={mockdata[0].title} description={mockdata[0].description} date={mockdata[0].date} author={mockdata[0].author} image={mockdata[0].image}/>
      </ScrollView>
    </View>
  );
};

function SectionContainer (title, description, image, date, author){

  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.articleTitle}>{mockdata[0].title}</Text>
      <Text style={styles.authorDateStyle}>Author: {mockdata[0].author}</Text>
      <Text style={styles.authorDateStyle}>Released: {mockdata[0].date}</Text>
      <Image
        style={styles.replacerBox}
        source={{
          uri: mockdata[0].image,
        }}
      />
      <Text style={styles.sectionDescription}>{mockdata[0].description}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: Colors.BLACK,
    flex: 1,
  },
  scrollView: {
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    paddingVertical: 20,
    backgroundColor: Colors.SECONDARY,
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  sectionTitle: {
    ...Typography.FONT_SEMI_BOLD,
    fontSize: Typography.FONT_SIZE_32,
    color: Colors.WHITE,
  },
  headerContainer: {
    ...Typography.FONT_SEMI_BOLD,
    fontSize: Typography.FONT_SIZE_32,
    paddingHorizontal: 24,
    paddingVertical: 20,
    color: Colors.WHITE,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: Colors.WHITE,
    marginHorizontal: 20,
  },
  articleTitle: {
    ...Typography.FONT_SEMI_BOLD,
    fontSize: Typography.FONT_SIZE_32,
    color: Colors.WHITE,
    marginBottom: 15,
  },
  authorDateStyle: {
    marginTop: 8,
    ...Typography.FONT_REGULAR,
    fontSize: Typography.FONT_SIZE_16,
    color: Colors.GRAY_LIGHT,
  },
  replacerBox: {
    marginTop: 20,
    marginBottom: 20,
    width: '100%',
    height: 190,
    backgroundColor: Colors.PRIMARY,
    textAlign: 'center',
  },
  sectionDescription: {
    marginTop: 8,
    ...Typography.FONT_REGULAR,
    fontSize: Typography.FONT_SIZE_16,
    color: Colors.GRAY_LIGHT,
  },
  highlight: {
    fontWeight: '700',
  },
  colorBold: {
    fontWeight: '900',
    color: 'green',
  },
  footer: {
    color: Colors.GRAY_LIGHT,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
