# Timestamp

Get the current date/time/tz within your workflow steps.

- date: **Returns the current date ex. (02-10-2023)**
- time: **Returns the current time ex. (13.34.56.pm)**
- tz: **Returns the current timezone ex. (Asia/Kolkata)**

```yml
- name: Get Timestamp
  id: timestamp
  uses: gh-actions-projects/timestamp@v1.0.0
```
