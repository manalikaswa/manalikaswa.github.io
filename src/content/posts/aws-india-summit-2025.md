---
title: "My AWS India Summit Experience"
description: "Notes and takeaways from the AWS India Summit 2025 in Mumbai — keynote highlights and breakout session deep-dives."
date: "2025-06-29"
readTime: "8 min read"
image: "/assets/images/posts/aws-india-summit-2025.png"
category: "Tech"
slug: "aws-india-summit-2025"
---

# My AWS India Summit Experience

I recently attended the AWS India Summit 2025 held in Mumbai. The experience was good overall. However, the long-running food queues and mismanaged logistics were problematic. While booth visits were visually engaging, they leaned more toward marketing than technical depth. I attended several breakout sessions — each around 30 minutes — which focused on breadth rather than deep dives. Nevertheless, it was insightful to explore diverse architectural patterns and innovations. These are the notes I made:

## Keynote

### AWS Databases

1. **Relational**: Amazon Aurora, Amazon RDS
2. **Non-relational:** Amazon DynamoDB, Amazon DocumentDB (MongoDB), Amazon Neptune, Amazon MemoryDB, Amazon Keyspaces (Cassandra), Amazon Timestream
3. **Caching**: Amazon ElastiCache: Valkey, Memcached, Redis OSS
4. **Vector**: RDS pgVector, Opensearch

### Amazon SageMaker Unified studio

### Security

1. Amazon GuardDuty
2. Amazon Macie
3. Amazon Inspector (scan Amazon EC2, Docker images, AWS Lambda)
4. Amazon Security hub
5. Amazon Detective
6. Amazon Security Lake

## Breakout sessions

### 1. Data foundation for analytics and AI: From data to outcomes at scale

*Vinay Kumar, Principal Product Manager — Data and AI, AWS*

- Iceberg S3 tables

Note: Got to know about this open source GenAI initiative: OPEA

### 2. How TCS modernized TCS BaNCS to transform core banking with Amazon Aurora

*Samit Deb, Principal Solutions Architect, AWS India | Manish Madan, Program Director, TCS BaNCS*

- MySQL and PostgreSQL compatibility
- Distributed
- Global DB for multi region, Multi AZ support
- up to 15 read replicas
- **Amazon Aurora Serverless v2** (up to 90% cheaper than provisioned) for automatic vertical scaling
- **Amazon Aurora Limitless DB** (PostgreSQL): Horizontal scaling for write-intensive apps
- **I/O optimised Aurora** (I/O is free; only compute and storage billed)
- Parallel query for faster queries
- In PostgreSQL, you can access vector database capabilities

### 3. How PocketFM reduced their costs by 30% by seamlessly migrating their caching workload to Valkey on Amazon ElastiCache

*Gururaj Bayari, Worldwide Senior Specialist Solutions Architect, Elasticache & MemoryDB, AWS | Arjun Hariharan, Principal Engineer, PocketFM*

**Amazon ElastiCache:**

- For caching, sessions/cookies, analytics, ads, real-time store, chats
- Managed — serverless vs node based autoscaling
- Global, multi AZ
- Write — more shards, reads — more nodes per cluster
- Valkey (20% cheaper than Redis)

**Migration:**

- Decoupled and broke down clusters, leading to better scaling and cost attribution
- Moved some clusters from large to xlarge (10% reduction due to high throughput)
- Hot keys mitigation: (Can lead to uneven distribution) Did **client side caching** of static data and config based on prediction by running nightly jobs.
- Used **HSET** data structure to reduce I/O
- Avoided high TTL
- Handled timeouts, retries during migration
- Adopted **Blue green deployment**: Old and new clusters both active, better to rollback. Requires code changes.

### 4. Engineering a high-performance stock trading infrastructure on AWS

*Abhishek Dey, Senior Technical Account Manager, AWS India | Prakash Shah, Principal Account Manager, AWS India*

- Due to regulations, had **two** on prem servers connected to AWS using **Direct Connect + TGW (Transit Gateway)**
- Inside AWS: **Two** region VPC architecture. Each VPC had 2 app servers (ECS) with ALB. **Amazon CloudFront** + **Amazon Route 53** for distribution. **AWS WAF** for security. **Amazon Aurora** + **Amazon ElastiCache** Redis for data storage.
- **MSK (Amazon Managed Streaming for Kafka)**: Used to ingest real-time market data (e.g., trading ticks, market feeds) from on prem servers.
- **Amazon Glue** used for transferring info post trading asynchronously
- **Analytics**: **Amazon S3 + Amazon Redshift + Amazon QuickSight**
- API: Demat account opening + login, Portfolio: via **Amazon API Gateway**
- Watchlist and charts: WebSockets for real-time
- Auto scaling during market hours

### 5. Real-time streaming at Nykaa: Powering ad-tech with Amazon Managed Streaming for Apache Kafka

*Ankush Sharma, Senior Solutions Architect, AWS India | Shiv Pratap Singh, Senior Manager, Software Development Engineering, Nykaa*

Clickstream Analytics for recommendation, personalisation, Ads

- **Amazon API Gateway** + **AWS Lambda** to ingest data
- Realtime processing: **Amazon MSK** → **Amazon Managed Flink** → multiple **Amazon MSK** clusters for AdTech and personalisation
- Later processing for analytics: **Amazon Kinesis Data Streams** → **Kinesis Firehose** → **Amazon S3**

AdTech Architecture to select which ad to show to a user:

- AdRelevance: Amazon MSK -> Amazon DynamoDB -> SageMaker ML to predict an ad
- AdCounter: **Amazon MSK** → **Amazon MSK Connect** -> **Amazon OpenSearch Service** to get the number of ad clicks by the user
- (per min): → **Amazon DynamoDB** + above prediction to finally select an ad
- (per day): → **Amazon Redshift** to generate daily reports and dashboards for brands

**Generic Streaming Design patterns**

- **Ingestion:** AWS IoT, Kinesis Agent, Amazon MSK Connect
- **Storage:** Amazon Kinesis Data Streams, Amazon MSK (Serverless < Express < Standard brokers — from managed to most flexible)
- **Processing:** Amazon Flink, AWS Lambda, Amazon EMR, AWS Glue
- **Integration:** Amazon Kinesis Data Firehose, Amazon S3, Amazon Redshift, Amazon OpenSearch Service

### 6. Ready for what's next? — Designing networks for growth and flexibility

*Syed Wajid Kashani, Technical Account Manager, AWS India | Harsh Wardhan, Senior Vice President, Head of Cloud CoE, Axis Bank*

Multi region Multi AZ architectures connected with:

- **Transit Gateway peering**: Can also connect an **AWS Direct Connect gateway**. Good for hub and spoke design. Static routing and Regional segmentation using route tables. Security: Layer 7
- **AWS Cloud WAN:** Can also connect tunnel-less VPN/SDWAN, **AWS Direct Connect**, **AWS Transit Gateway**. Dynamic routing and Global segmentation. Security: Layer 7
- **VPC peering connection without gateway:** Simple. Full mesh. Static routing. Security: Layer 4. cost-effective (no hourly charges, only data transfer)
- **AWS PrivateLink:** Fully managed. Security: Layer 4 using endpoint policies, security groups

**Security Operations Integration**:

- Use of threat intelligence (trust community CTI, cyber analysts, third party threat intel on EC2/ECS) via **AWS Step Functions**
- Integrations with **Amazon GuardDuty**, **AWS Network Firewall**, **Amazon Route 53 DNS Firewall**

**IP Management:**

- Use **Amazon VPC IP address manager (IPAM)** and Amazon IP insights.
- List IP ranges for each hierarchy (VPC, App, Env, Region, Cloud)

**Generic design patterns**

- **High availability**: Multi AZ, Multi Region, different control and data planes, ELB, Auto scaling, zonal shifting
- **Disaster recovery:** Backup and restore, Pilot light (Minimal version of app running in case of failover)/ Warm standby (lightweight live deployment in alternate region), Using Route 53 application recovery controller to route traffic
- **Resilience**: **AWS Resilience Hub**, **AWS Fault Injector Simulator**, **Amazon CloudWatch**, **AWS X-Ray**, **AWS Elastic Disaster Recovery**, **AWS Backup**
- **Best practices**: Design for failure, implement retry and backoff, monitor performance, test recovery procedures, Use Infrastructure as Code (IaC)

Thanks for reading!

---

*Originally published on [Medium](https://medium.com/@manalii/my-aws-india-summit-2025-experience-38f98ed4d191).*
