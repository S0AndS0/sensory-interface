---
layout: page
title: GDPR Compliance
date: 2020-05-17
excerpt: Our commitment to GDPR compliance

company:
  name: Sensory Interface
  group: The Public Knowledge Workshop
  # subsidiaries:
  #   - one
  #   - two
  #   - three
  email: info@sensoryinterface.com
  phone:
  address:

information_commissioner:
  email: casework@ico.org.uk
  address: Information Commissioner's Office, Wycliffe House, Water Lane, Wilmslow, Cheshire, SK9 5AF

language:
  code: en
  direction: ltr
---
{%- if page.company.subsidiaries -%}
  {% assign subsidiaries_list = '' %}
  {%- for subsidiary_name in company.subsidiaries -%}
    {%- if forloop.last -%}
      {% assign subsidiaries_list = subsidiaries_list | append: 'and ' | append: subsidiary_name %}
    {%- else -%}
      {% assign subsidiaries_list = subsidiaries_list | append: subsidiary_name %}
    {%- endif -%}

    {%- if forloop.length > 1 -%}
      {%- unless forloop.last -%}
        {% assign subsidiaries_list = subsidiaries_list | append: ', ' %}
      {%- endunless -%}
    {%- endif -%}
  {%- endfor -%}
{%- endif -%}



{{ page.company.name }} is part of {{ page.company.group }} {%- if subsidiaries_list -%}which includes {{ subsidiaries_list }}{%- endif -%}. This privacy policy will explain what personal data is collected and how it is used when you access this site.


------


#### Topics:


- [What data do we collect?][heading__what_data_do_we_collect]

- [How we collect your data?][heading__how_we_collect_your_data]

- [How will we use your data?][heading__how_will_we_use_your_data]

- [How do we store your data?][heading__how_do_we_store_your_data]

- [Marketing][heading__marketing]

- [What are your data protection rights?][heading__what_are_your_data_protection_rights]

- [What are cookies?][heading__cookies]

  - [How do we use cookies?][heading__how_do_we_use_cookies]
  - [What types of cookies do we use?][heading__what_types_of_cookies_do_we_use]
  - [How to manage your cookies][heading__how_to_manage_cookies]

- [Privacy policies of other websites][heading__privacy_policies_of_other_websites]

- [Changes to our privacy policy][heading__changes_to_our_privacy_policy]

- [How to contact us][heading__how_to_contact_us]

- [How to contact the appropriate authorities][heading__how_to_contact_the_appropriate_authorities]

- [Attribution][heading__attribution]


------


## What data do we collect?
[heading__what_data_do_we_collect]: #what-data-do-we-collect


{{ page.company.name }} collects the following data:


- Information submitted via URL Search Params, check [Mozilla Developer -- `URLSearchParams`](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams) documentation for technical details

- _`<Add any other data that is collected>`_


___


## How we collect your data?
[heading__how_we_collect_your_data]: #how-we-collect-your-data


You directly provide {{ page.company.name }} with most of the data the we collect. We collect data and process data when you:


- Access the `view.html` page and submit information such as (but not limited to) CSV files encoded as URL Search Params

- Use or view our website via your browser's cookies, check [Mozilla Developer -- `HTTP cookies`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies) documentation for technical details

- Use or view our website via your browser's Local Storage API, check [Mozilla Developer -- `Window.localStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) documentation for technical details

- _`<Add any other ways that this site collects data>`_


___


## How will we use your data?
[heading__how_will_we_use_your_data]: #how-will-we-use-your-data


{{ page.company.name }} collects your data so that we can:


- Translate submitted data into audio (or other formats) and present translated data to you

- _`<Add how else this site uses data>`_


{{ page.company.name }} claims that we will **not** share your data with our partner companies.


When {{ page.company.name }} processes your data, and resulting information, we assert that best efforts are taken such that we will **not** re-transmit your data anywhere else other than your browser.


___


## How do we store your data?
[heading__how_do_we_store_your_data]: #how-do-we-store-your-data


{{ page.company.name }} claims to **not** store any logs of your data, check [Privacy policies of other websites][heading__privacy_policies_of_other_websites] for details on third-parties that this site utilizes that may be storing your data.


___


## Marketing
[heading__marketing]: #marketing


{{ page.company.name }} currently does **not** engage in any marketing. We will **not** email you about products and services, and will only contact you via email to respond to your inquiries.


If this changes **and** you have agreed to receive marketing, you may always opt out at a later date.


You have the right at any time to stop {{ page.company.name }} from contacting you for marketing purposes or giving your data to other members of {{ page.company.name }} Group.


___



## What are your data protection rights?
[heading__what_are_your_data_protection_rights]: #what-are-your-data-protection-rights


{{ page.company.name }} would like to make sure you are fully aware of all your data protection rights. Every client is entitled to the following:


- **The right to access** -- You have the right to request {{ page.company.name }} for copies of your personal data. We may charge you a small fee for this service.

- **The right to rectification** -- You have the right to request that {{ page.company.name }} correct any information you believe is inaccurate. You also have the right to request {{ page.company.name }} to complete the information you believe is incomplete.

- **The right to erasure** -- You have the right to request that {{ page.company.name }} erase your personal data, under certain conditions.

- **The right to restrict processing** -- You have the right to request that {{ page.company.name }} restrict the processing of your personal data, under certain conditions.

- **The right to object to processing** -- You have the right to object to {{ page.company.name }}'s processing of your personal data, under certain conditions.

- **The right to data portability** -- You have the right to request that {{ page.company.name }} transfer the data that we have collected to another organization, or directly to you, under certain conditions.


If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us at our email: {{ page.company.email }}

{%- if page.company.phone -%}
Call us at: {{ page.company.phone }}
{%- endif -%}

{%- if page.company.address -%}
Or write to us: {{ page.company.address }}
{%- endif -%}


___


## Cookies
[heading__cookies]: #cookies


Cookies are text files placed on your computer to collect standard Internet log information and visitor behavior information. When you visit our website, we may collect information from you automatically through cookies or similar technology.


For further information, visit [`allaboutcookies.org`](https://allaboutcookies.org/)


___


### How do we use cookies?
[heading__how_do_we_use_cookies]: #how-do-we-use-cookies


{{ page.company.name }} claims to **not** use cookies, however, third-parties that this site utilizes may. Pleas review the [Privacy policies of other websites][heading__privacy_policies_of_other_websites] section for further details.


___


### What types of cookies do we use?
[heading__what_types_of_cookies_do_we_use]: #what-types-of-cookies-do-we-use


There are a number of different types of cookies, however our web site uses:


- _`<Add any types of cookies that are used>`_


___


### How to manage cookies
[heading__how_to_manage_cookies]: #how-to-manage-cookies


You can set your browser not to accept cookies, and the above website tells you how to remove cookies from your browser. However, in a few cases, some of our website features may not function as a result.

___


## Privacy policies of other websites
[heading__privacy_policies_of_other_websites]: #privacy-policies-of-other-websites


The {{ page.company.name }} website contains links to other websites. Our privacy policy applies only to our website, so if you click a link to another website, you should read their privacy policy.


The {{ page.company.name }} website utilizes third-party assets (CSS, JavaScript, etc.) the full list of third-party web domains are:


- [`maxcdn.bootstrapcdn.com`](https://maxcdn.bootstrapcdn.com)

- [`unpkg.com`](https://unpkg.com)

- [`firebase.google.com`](https://firebase.google.com)

- [`fonts.googleapis.com`](https://fonts.googleapis.com)

- [`github.com`](https://github.com)


Other websites that this site may load assets from are:


- [`sensoryinterface.com`](https://sensoryinterface.com)

- [`hasadna.org`](https://www.hasadna.org)

- <List all external `href` and `src` URLs>


___


## Changes to our privacy policy
[heading__changes_to_our_privacy_policy]: #changes-to-our-privacy-policy


{{ page.company.name }} keeps its privacy policy under regular review and places any updates on this web page. This privacy policy was last updated {{ page.date | date: "%-d %B %Y" }}


___


## How to contact us
[heading__how_to_contact_us]: #how-to-contact-us


If you have any questions about {{ page.company.name }}'s privacy policy, the data that we hold on you, or you would like to exercise one of your data protection rights, please do not hesitate to contact us.


Email us at: {{ page.company.email }}


{%- if page.company.phone -%}
Call us at: {{ page.company.phone }}
{%- endif -%}


{%- if page.company.address -%}
Or write to us: {{ page.company.address }}
{%- endif -%}


___


## How to contact the appropriate authorities
[heading__how_to_contact_the_appropriate_authorities]: #how-to-contact-the-appropriate-authorities


Should you wish to report a complaint or if you feel that {{ page.company.name }} has not addressed your concern in a satisfactory mannor, you may contact the [Information Commissioner's Office](https://ico.org.uk/global/contact-us/email/).


Email: {{ page.information_commissioner.email }}

Address: {{ page.information_commissioner.address }}


___


## Attribution
[heading__attribution]: #attribution


This document was built thanks to the following websites:


- [GDPR -- Privacy Policy Template](https://gdpr.eu/privacy-notice/)

- [ICO -- Directions to Head Office](https://ico.org.uk/about-the-ico/who-we-are/directions-head-office/)
