# Fact-check: File Storage and Object Storage (round 1, 2026-10-20)

I did not write this page. I downloaded each of the 9 sources with `curl -sL` on 2026-10-20 and converted them to plain text in the scratchpad (not committed). I matched each cited sentence of the page against that text. All sources are official (AWS, Google Cloud, Microsoft Learn). Each source has a cite, and each cite has a source. The LMS example, the uncited "Common mistakes" advice, and the tester tips are the tutorial's own words. I found 1 FAIL and fixed it.

| # | Location (heading) | Claim (short) | Cite | Verdict | Evidence (quote) / Fix |
|---|---|---|---|---|---|
| 1 | In plain words | S3, Google Cloud Storage, Azure Blob Storage are object storage | 1, 2, 3 | PASS | S1 "Amazon Simple Storage Service (Amazon S3) is an object storage service" / S2 "Cloud Storage provides durable, globally available object storage" / S3 "Azure Blob Storage is Microsoft's object storage solution for the cloud." |
| 2 | In plain words | An S3 object is a file plus metadata; a bucket is a container | 1 | PASS | "An object is a file and any metadata that describes the file. A bucket is a container for objects." |
| 3 | In plain words | Each object has a key, its unique name in the bucket | 1 | PASS | "Each object has a key (or key name), which is the unique identifier for the object within the bucket." |
| 4 | In plain words | Clients read Blob Storage objects over HTTP or HTTPS | 3 | PASS | "Users or client applications can access objects in Blob Storage via HTTP or HTTPS from anywhere in the world." |
| 5 | In plain words | Blob Storage is for large amounts of unstructured data, such as text or binary | 3 | PASS | "Blob Storage is optimized for storing massive amounts of unstructured data." / "such as text or binary data" |
| 6 | In plain words | Uses: images or documents for a browser, distributed access, video, backup | 3 | PASS | "Serving images or documents directly to a browser." / "Storing files for distributed access." / "Streaming video and audio." / "Storing data for backup and restore, disaster recovery, and archiving." |
| 7 | In plain words | AWS: keep large files such as images and documents in S3; app gets them when needed | 4 | PASS | "Consider using Amazon S3 to store large, unstructured data, such as images and documents. Your application can retrieve this data when required" |
| 8 | In plain words | "A common design" keeps bytes in object storage and only key/URL and metadata in the database | – | FAIL→fixed | A claim about common practice with no cite, and no official source states it in general words (see the notes). Now marked as the tutorial's own advice: "This tutorial advises one design: keep the file bytes in object storage, and keep only the file key or URL and its metadata in the database." |
| 9 | Private by default | Buckets and objects are private until you give access | 1 | PASS | "Buckets and the objects in them are private and can be accessed only if you explicitly grant access permissions." |
| 10 | Private by default | New buckets block public access by default; users can change policies | 5 | PASS | "By default, new buckets, access points, and objects don't allow public access. However, users can modify bucket policies, access point policies, or object permissions to allow public access." |
| 11 | Short-lived links | A presigned URL gives time-limited access to one object | 6 | PASS | "You can use presigned URLs to grant time-limited access to objects in Amazon S3 without updating your bucket policy. A presigned URL can be entered in a browser or used by a program to download an object." |
| 12 | Short-lived links | The link works until its expiry time | 6 | PASS | "You can use the presigned URL multiple times, up to the expiration date and time." |
| 13 | Direct upload | The app moving files uses compute, memory, and bandwidth | 8 | PASS | "However, this approach absorbs valuable resources such as compute, memory, and bandwidth." |
| 14 | Direct upload | Valet Key gives the client a limited token for direct access | 8 | PASS | "Use a token that provides clients with restricted direct access to a specific resource, in order to offload data transfer from the application." |
| 15 | Fast delivery | Storage serves static files directly to the client | 9 | PASS | "Deploy static content to a cloud-based storage service that can deliver them directly to the client." |
| 16 | Fast delivery | A CDN keeps copies in many datacenters | 9 | PASS | "consider using a content delivery network (CDN) to cache the contents of the storage container in multiple datacenters around the world." |
| 17 | Common mistakes | S3 private by default; a user can change policies to allow public access | 5 | PASS | Same quote as row 10. |
| 18 | Common mistakes | Multipart upload is a best practice for 100 MB or larger | 7 | PASS | "It's a best practice to use multipart upload for objects that are 100 MB or larger instead of uploading them in a single operation." |
| 19 | Common mistakes | If one part fails, send only that part again | 7 | PASS | "If transmission of any part fails, you can retransmit that part without affecting other parts." |
| 20 | Common mistakes | S3 Versioning restores deleted or overwritten files | 1 | PASS | "you can use S3 Versioning to keep multiple versions of an object in the same bucket, which allows you to restore objects that are accidentally deleted or overwritten." |
| 21 | What a tester can check | Callout says it is tutorial advice | – | PASS | "These test ideas are the tutorial's own advice." |

## Fixes

- Row 8: "A common design" changed to "This tutorial advises one design", so the sentence is plainly the tutorial's own advice.
- Notes: the "Owner claims with no public source" line now quotes the new wording.

Open FAILs: 0
