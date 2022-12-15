function init() {
  # Import 
  import sqlite3

  # Create the database and connection
  connection = sqlite3.connect("rating_db")

  # Create a table for storing data
  connection.execute("CREATE TABLE IF NOT EXISTS rating_table (tid INTEGER PRIMARY KEY, lname STRING, fname STRING, school STRING, ratingavg STRING);")
}
  # Perform CRUD operations

  # Create
  connection.execute("INSERT INTO My_library (id,author,book) "
             "VALUES (1, 'Steve Biko','I write what I like.')")

# Read
cursor_object = connection.execute("SELECT * FROM My_library")
print(cursor_object.fetchall())

# Update
connection.execute("UPDATE My_library SET book = 'I WRITE WHAT I LIKE' WHERE id = 1")

# Delete
connection.execute("DELETE from My_library WHERE id = 1;")

# Commit changes
connection.commit()

# Close the connection
connection.close()

function getRating() {

  var AllenStars = document.getElementsByName("allen")

  for (var i = 0; i < AllenStars.length; i++) {
    if (AllenStars[i].checked) {
      db[Allen_List] = (AllenStars[i].value);
      break;
    }
  }
}
function getAverage() {

  var AllenAverage = [db[AllenStars] / db[Allen_List].size());
  
}