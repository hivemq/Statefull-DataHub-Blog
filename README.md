# Statefull-DataHub-Blog

a repo accompanying the Statefull-DataHub-Blog by Kamiel Straatman

# Commands

```
curl -X POST localhost:8888/api/v1/data-hub/management/start-trial

mqtt hivemq schema create --id=temp_schema  --file temp_schema.json --type json
mqtt hivemq schema create --id=temp_avg_schema  --file temp_avg_schema.json --type json
mqtt hivemq script create -i moving_avg --file moving_avg.js --type TRANSFORMATION
mqtt hivemq data-policy create --file data-policy-Calculate-mov-avg.json                                        

mqtt shell / connect / pub -t test -m '{ "temperature": 20}'

```

# See it working


![](assets/20250502_110115_Mov-avg-v2.gif)
