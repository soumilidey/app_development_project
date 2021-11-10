import React, { Component } from 'react';
import { Text, TouchableOpacity, View, Alert, FlatList, Image, ImageBackground, StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';

import axios from 'axios';

export default class MessageScreen extends React.Component {
 
  render() {
    return (
      <View style={styles.textContainer}>
        <Text style={styles.text}>Spreading the Message</Text>
        <Text style={styles.text}>
LGBTQ is an acronym for lesbian, gay, bisexual, transgender and queer or questioning. These terms are used to describe a persons sexual orientation or gender identity.

LESBIAN:
A woman whose enduring physical, romantic, and/or emotional attraction is to other women. Some lesbians may prefer to identify as gay or as gay women.


GAY:
The adjective used to describe people whose enduring physical, romantic, and/or emotional attractions are to people of the same sex. Sometimes lesbian is the preferred term for women.


BISEXUAL:
A person who has the capacity to form enduring physical, romantic, and/or emotional attractions to those of the same gender or to those of another gender. People may experience this attraction in differing ways and degrees over their lifetime. Bisexual people need not have had specific sexual experiences to be bisexual; in fact, they need not have had any sexual experience at all to identify as bisexual.


TRANSGENDER:
An umbrella term for people whose gender identity and/or gender expression differs from what is typically associated with the sex they were assigned at birth. People under the transgender umbrella may describe themselves using one or more of a wide variety of terms— including transgender. Many transgender people are prescribed hormones by their doctors to bring their bodies into alignment with their gender identity. Some undergo surgery as well. But not all transgender people can or will take those steps, and a transgender identity is not dependent upon physical appearance or medical procedures.


QUEER:
An adjective used by some people whose sexual orientation is not exclusively heterosexual. Typically, for those who identify as queer, the terms lesbian, gay, and bisexual are perceived to be too limiting and/or fraught with cultural connotations they feel don’t apply to them. Some people may use queer, or genderqueer, to describe their gender identity and/or gender expression. Once considered a pejorative term, queer has been reclaimed by some LGBTQ people to describe themselves; however, it is not a universally accepted term even within the LGBTQ community.


QUESTIONING:
Sometimes, when the Q is seen at the end of LGBT, it can also mean questioning. This term describes someone who is questioning their sexual orientation or gender identity.


- LGBTQ scientists in STEM fields report more negative workplace experiences than their counterparts in other industries or non-LGBTQ scientists in STEM. LGBTQ scientists are also more likely to leave STEM fields at higher rates than non-LGBTQ scientists. Learn more: LGBTQ scientists are still left out and LGBTQ students more likely to leave STEM

- Among LGBT youth, mental health issues stemming from rejection are at alarming levels.  According to a research study done by the Family Acceptance Project (San Francisco State University), compared to teens who have not faced rejection LGBT teens who have faced rejection from their families/ caregivers/ peers are six times more likely to report high levels of depression, six times more likely to experiment with drugs, and eight times more likely to commit suicide. Approximately 30-40% of all LGBT youth who have faced rejection on account of being LGBT have attempted suicide. 

- Homelessness among LGBT youth is extremely high compared to the rest of the population. According to a study by the UCLA School of Law LGBT youth make up approximately 35-40% of homeless youth, despite constituting only  about 5% of the overall youth cohort.

- According to the National Gay and Lesbian Task Force (NGLTF) one in five LGBT college students fear for their physical safety due to their gender identity or their perceived sexual orientation. 

- According to the Gay, Lesbian and Straight Education Network (GLSEN) only about 2-5% of college athletes are out. According to the Executive Director of GLSEN, there are two major minefields in coming out: the potential to face ridicule and lose support of teammates and peers; and the loss of financial and personal support from the coach.

- Campus Pride has released an index of colleges and universities based on their LGBT friendliness, based on a survey of 50+ questions, corresponding to 8  different LGBT-friendly factors. These factors are: policy inclusion; support & institutional commitment; academic life; student life; housing; campus safety; counseling & health; and recruitment & retention efforts..............................

Contact: J.Wills(email:xxx@gmail.com)

        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  textContainer: {
    backgroundColor: 'orange',
  },
  text: {
    color: 'black',
    padding: 20,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

