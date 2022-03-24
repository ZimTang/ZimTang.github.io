# app.use内部发生了什么

如果use函数传入的是对象`{install(app,option){}}`

那么会执行这个对象中的install函数，并且会自动将app对象传入

如果use函数传入的是一个函数

则自动会将app对象传入这个函数的第一个参数
