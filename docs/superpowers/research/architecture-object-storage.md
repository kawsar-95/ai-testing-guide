# File Storage and Object Storage (Architecture 08) — research notes (2026-10-20)

Fetch note: each source was fetched with `curl -sL` on 2026-10-20 and stripped to plain text in the scratchpad. The text was not committed. Each quote below is copied from that text. Curly apostrophes in the source are written as straight apostrophes here.

Base text: the owner's notes, section "File Storage Problem and Object Storage" (`architecture-owner-notes.md`). The LMS profile-image example, the "Common mistakes" advice, and the tester tips are the tutorial's own words. Three mistakes (public permissions, large uploads, no versioning) also have a cite.

## Sources

S1. What is Amazon S3? — Amazon S3 User Guide (AWS) — https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html — accessed 2026-10-20. Page cite `[1]`.
S2. Cloud Storage overview — Google Cloud Documentation — https://cloud.google.com/storage/docs/introduction — accessed 2026-10-20. Page cite `[2]`.
S3. Introduction to Blob (object) Storage — Microsoft Learn — https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blobs-introduction — accessed 2026-10-20. Page cite `[3]`.
S4. REL05-BP06 Make systems stateless where possible — AWS Well-Architected Framework, Reliability Pillar (AWS) — https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/rel_mitigate_interaction_failure_stateless.html — accessed 2026-10-20. Page cite `[4]`.
S5. Blocking public access to your Amazon S3 storage — Amazon S3 User Guide (AWS) — https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-control-block-public-access.html — accessed 2026-10-20. Page cite `[5]`.
S6. Download and upload objects with presigned URLs — Amazon S3 User Guide (AWS) — https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-presigned-url.html — accessed 2026-10-20. Page cite `[6]`.
S7. Uploading and copying objects using multipart upload in Amazon S3 — Amazon S3 User Guide (AWS) — https://docs.aws.amazon.com/AmazonS3/latest/userguide/mpuoverview.html — accessed 2026-10-20. Page cite `[7]`.
S8. Valet Key pattern — Azure Architecture Center (Microsoft Learn) — https://learn.microsoft.com/en-us/azure/architecture/patterns/valet-key — accessed 2026-10-20. Page cite `[8]`.
S9. Static Content Hosting pattern — Azure Architecture Center (Microsoft Learn) — https://learn.microsoft.com/en-us/azure/architecture/patterns/static-content-hosting — accessed 2026-10-20. Page cite `[9]`.

## Claims

| # | Claim | Source | Quote |
|---|---|---|---|
| 1 | Amazon S3 is an object storage service | S1 | "Amazon Simple Storage Service (Amazon S3) is an object storage service that offers industry-leading scalability, data availability, security, and performance." |
| 2 | An object is a file plus the metadata that describes it; a bucket is a container for objects | S1 | "An object is a file and any metadata that describes the file. A bucket is a container for objects." |
| 3 | Each object has a key, its unique identifier in the bucket | S1 | "Each object has a key (or key name ), which is the unique identifier for the object within the bucket." |
| 4 | Buckets and objects are private unless access is granted | S1 | "Buckets and the objects in them are private and can be accessed only if you explicitly grant access permissions." |
| 5 | S3 Versioning keeps many versions and restores deleted or overwritten objects | S1 | "you can use S3 Versioning to keep multiple versions of an object in the same bucket, which allows you to restore objects that are accidentally deleted or overwritten." |
| 6 | A Cloud Storage object is an immutable piece of data, a file of any format | S2 | "An object is an immutable piece of data consisting of a file of any format." |
| 7 | A bucket can hold essentially unlimited objects | S2 | "Each bucket can contain essentially unlimited individual objects." |
| 8 | Azure Blob Storage is object storage for large amounts of unstructured data (text or binary) | S3 | "Azure Blob Storage is Microsoft's object storage solution for the cloud. Blob Storage is optimized for storing massive amounts of unstructured data." / "such as text or binary data" |
| 9 | Blob Storage is designed for serving images or documents to a browser, files for distributed access, video, and backup | S3 | "Serving images or documents directly to a browser. Storing files for distributed access. Streaming video and audio." / "Storing data for backup and restore, disaster recovery, and archiving." |
| 10 | Clients access blob objects over HTTP or HTTPS | S3 | "Users or client applications can access objects in Blob Storage via HTTP or HTTPS from anywhere in the world." |
| 11 | Use S3 for large unstructured data such as images and documents; the app gets it when needed | S4 | "Consider using Amazon S3 to store large, unstructured data, such as images and documents. Your application can retrieve this data when required, eliminating the need to store it in memory." |
| 12 | New buckets and objects do not allow public access by default, but users can change policies to allow it | S5 | "By default, new buckets, access points, and objects don't allow public access. However, users can modify bucket policies, access point policies, or object permissions to allow public access." |
| 13 | Block Public Access settings override those policies | S5 | "S3 Block Public Access settings override these policies and permissions so that you can limit public access to these resources." |
| 14 | Presigned URLs give time-limited access without changing the bucket policy | S6 | "You can use presigned URLs to grant time-limited access to objects in Amazon S3 without updating your bucket policy." |
| 15 | A presigned URL can be used many times until it expires | S6 | "You can use the presigned URL multiple times, up to the expiration date and time." |
| 16 | Multipart upload is a best practice for objects of 100 MB or larger | S7 | "It's a best practice to use multipart upload for objects that are 100 MB or larger instead of uploading them in a single operation." |
| 17 | A failed part can be sent again without affecting the other parts | S7 | "If transmission of any part fails, you can retransmit that part without affecting other parts." |
| 18 | Valet key: a token gives clients restricted direct access to a resource, to offload data transfer from the app | S8 | "Use a token that provides clients with restricted direct access to a specific resource, in order to offload data transfer from the application." |
| 19 | When the app moves the data itself, it uses compute, memory, and bandwidth | S8 | "However, this approach absorbs valuable resources such as compute, memory, and bandwidth." |
| 20 | Static content can be served directly from a storage service | S9 | "Deploy static content to a cloud-based storage service that can deliver them directly to the client." |
| 21 | A CDN can cache the storage content in many datacenters | S9 | "consider using a content delivery network (CDN) to cache the contents of the storage container in multiple datacenters around the world." |
| 22 | Cloud Storage stores data as objects in buckets; it is object storage | S2 | "Cloud Storage is a scalable and managed storage service offered by Google Cloud that lets you store data as objects in containers called buckets ." / "Cloud Storage provides durable, globally available object storage" |

## Owner claims with no public source

- "Usually we do not store large file binaries directly in the database. We store file URL, path, and metadata in the database." No official vendor page found that states this rule in general words. The page keeps it as the tutorial's own advice ("This tutorial advises one design", no cite). Claim 11 (S4) supports the related point that large files such as images and documents go to object storage.
- "Not keeping database metadata synced after file update or delete" and "Not separating public and private file access control" (owner's Common mistakes). Kept as the tutorial's own advice, with no cite.
