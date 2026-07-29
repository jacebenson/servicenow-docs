---
title: Archive Rules
description: Archive Rules Explained
layout: libdoc_page.liquid
eleventyNavigation:
    parent: Data Management
    key: Archive Rules
    order: 2800
date: git Last Modified
---
Archive Rules records in ServiceNow are weird.

## How archiving works
You set up an archive rule for a specific table you say when these conditions are met archive these recordsand what happens to those records is they are removed from the current table and put on a magic table that doesn't extend the table you're currently on but is still referenced a bull by the records that referenced the originating table.

This helps improve performance by reducing the rows that you're searching when loading listsand searching or filtering for data on the table that's large.

However, if you need to retain that data for any duration of time once it's archived it's near impossible to deal with the only action you can take is to unarchive the record.

## The Archive Log
One more note, there's a table, the Archive Log.  The Archive Log is required to allow "unarchiving" records.  If you delete those logs you will lose the ability to unarchive the records they reference.

There's a few options for Archive Rules.

## The Form
![Archive Rule Form](/assets/archive-rule-form.png)

<details>
  <summary>Retain References</summary>

  > - Prior to Quebec, when records were archived, any references would have been converted to a flat text string, but from Quebec and so on, the reference is now retained, so users can just click on the field to open the referenced record.
  >
  > - This feature is activated on the archive rule itself by making the 'retain references' checkbox active. Once enabled, this can't be disabled.
  >
  > - For any records already archived before enabling this feature, two jobs will trigger to update these records, making the reference retention work.
  >
  > - The RefCopy job triggers first and will change the displayed text back to sys_ids.
  > 
  > [Support - KB1160381](https://support.servicenow.com/kb?id=kb_article_view&sysparm_article=KB1160381)
</details>
<details>
<summary>Auto rearchive</summary>
  This will also show a "Auto rearchive duration" field to rearchive things that were unarchived.
</details>


## Further Reading

Janel Wrote a series on Archiving and Reducing storage.
  
1. [Over your storage limit? Archiving may not be your friend - 07/26/2023](https://www.servicenow.com/community/developer-forum/over-your-storage-limit-archiving-may-not-be-your-friend/m-p/2624658)
2. [Over your storage limits? Wrangling in Knowledge articles - 08/03/2023](https://www.servicenow.com/community/developer-forum/over-your-storage-limits-wrangling-in-knowledge-articles/m-p/2633650)
3. [Over your storage limit? sys_email is loud (and full of junk) - 08/30/2023](https://www.servicenow.com/community/developer-forum/over-your-storage-limits-sys-email-is-loud-and-full-of-junk/m-p/2624675)
4. [Over your storage limit? Reducind our storage footpring; our lessons learned - 01/08/2024](https://www.servicenow.com/community/developer-forum/over-your-storage-limit-reducing-our-storage-footprint-our/m-p/2623398)
- [Archiving | General Overview (support)](https://support.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0782323)
- [Video: Justin Meadows - Archive and Destroy Rules](https://www.youtube.com/watch?v=36CXcv3R5sg)
- [Perspectium Archive Rules (and Destory Rules) Explained Blog Post](https://www.perspectium.com/blog/servicenow-archive-rules-explained/)
- [Maik Skoddow - Platform Performance *Data Archiving*](https://www.servicenow.com/community/servicenow-ai-platform-articles/performance-amp-maintenance-knowledge-amp-troubleshooting/ta-p/2545677)
- [Maik Skoddow - Archiving](https://www.servicenow.com/community/now-platform-articles/administration-data-archiving-knowledge-amp-troubleshooting/ta-p/2315540)
