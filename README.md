# Statefull-DataHub-Blog

a repo accompanying the Statefull-DataHub-Blog by Kamiel Straatman

# What Datahub is

HiveMQ DataHub  is an integrated policy and data transformation engine that validates, enforces, and manipulates data in motion to ensure data integrity and quality across your MQTT deployment. The HiveMQ DataHub was introduced 2 years ago and has proven itself as a huge success. Datahub provides user-definable mechanisms to control how MQTT data and MQTT client behavior is handled by the HiveMQ broker at scale. The precense of HiveMQ DataHub  is a huge break with the traditional MQTT approach where brokers traditionally were fully data agnostic. The broker simply did NOT intervene with the data that is transported.

# Whats new.

Until recently Datahub was only able to process messages stateless, so to say, solely operating  on a single message. But that has changed. As HiveMQ is moving more and more into the data value stream our datahub has evolved as well and now can also work in stateful operation modes. All with the same ease of defining, and configuring as you’re used to.


# Commands

This repo provides the nessesairy files to define schema's for data validation, scripting for data transforming and the policies to tie it all together.

Please install a HiveMQ broker and enable it's DataHub functionality for testing:

`curl -X POST localhost:8888/api/v1/data-hub/management/start-trial`

d

```


mqtt hivemq schema create --id=temp_schema  --file temp_schema.json --type json
mqtt hivemq schema create --id=temp_avg_schema  --file temp_avg_schema.json --type json
mqtt hivemq script create -i moving_avg --file moving_avg.js --type TRANSFORMATION
mqtt hivemq data-policy create --file data-policy-Calculate-mov-avg.json                                    

mqtt shell / connect / pub -t test -m '{ "temperature": 20}'

```

# See it working

![](assets/20250502_110115_Mov-avg-v2.gif)
