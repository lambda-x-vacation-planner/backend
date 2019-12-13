# Server and API 
https://ramble-round.herokuapp.com/

# Endpoints
## Register A User
```/user/reg```

Requires an Email, Password, and a Name
````
{
  "email": "",
  "password":"",
  "name":""
}
````

## Login
```/user/login```

Requires Email & Password
````
{
  "email": "",
  "password":"", 
}
````

## Find a user by their user ID
```user/:id```

Only need to provide the number in the endpoint.

## Delete user 
```user/:id```

Can only delete users if you are logged in


## GET all Activities
``` /activity ```

## POST Activity
``` /activity ```

Must be a host or above to post an activity

## find Activity by ID
``` /activity/:id ```

## find by host
``` /activity/:host ```

Use the name of the host to find all the hosts activities

## DELETE a Activity
``` /activity/:id ```

Must be a host or above to remove an activity

## Create a Destination
```/destine ```

To POST a destination you must have at least the location, name, &  arrival_date

## find destination by ID
```/destine/:id```

Need only to provide the number in the endpoint.

## DELETE a Destination
``` /destine/:id ```

Must be a logged in to delete one.

## POST a Photo
```/gallery```

## GET all photos
```/gallery```

## find Photo by ID
```/gallery/:id```

Need only to provide the number in the endpoint.

## DELETE a Photo
``` /gallery/:id ```

Must be a logged in to delete one.

## GET all Bookings
```/user/trip/book/```

Must be logged in to use.


## POST a booking
```/user/trip/book/```

You must be logged in.

must have activity_id of the activity that it is booking and the creator_user_id of the person who began the booking

````
{
  "activity_id": 42,
  "creator_user_id": 11
}
````

## GET by ID
```/user/trip/book/:id```

Must be logged in to use.

## DELETE a booking

```/user/trip/book/:id```

Must be logged in to delete.


## GET activities IDs
```/user/trip/book/activity/:id```

Must be logged in to use.

## GET Expense
```/user/trip/book/:id/expense```

Must be logged in to use.

The ID is the id of the booking, this end point is for the expense sheet created with the booking.

## POST/PUT an EXPENSE sheet
```/user/trip/book/:id/expense```

Must be logged in to use.

````
{
  "title":"",
  "description":"",
  "cost": 200,
  "paid": 200,
  "completed": true
}
````

## DELETE a booking
```/user/trip/book/:id/expense```

Must be logged in to delete.

The ID is the id of the booking, this end point is for the expense sheet created with the booking and should be deleted as such

## User Activities relationship table
This table keeps track of users activities and bookings. It holds only IDs that relate to other tables

## Create a user/activity relationship
```/user/trip/```

Must be logged in to use

````
{
  "activity_id": 137,
  "booking_id" : 2602,
  "user_id": 0
}
````

## DELETE Relationship
```/user/trip/:id```

Must be logged in to use.

