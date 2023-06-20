<h1>Comments</h1> 


<h4>The task is very interesting and I see points that can be done better</h4>
<h4>For example:</h4>


- when clicking on the edit hero, the card should expand, as when clicking on DETAILS.
Initially, I wanted to make a route / superhero when you click on DETAILS (and I did it) to open the full character card, in which you could update and view all the images of the hero. 
But it did not work correctly for transfer props (I tried with the usual callback, useLocation when using <Link to=''>, and tried useContext).   
- it was better to use Redux to prevent all the problems with passing props, but working with it takes time, so I did not use it in this project.   
- the FormHeroes form was supposed to become a universal component for updating and creating, but I did not plan its universality and did not have enough time to fix it.   
- The createdAt column is missing in the Heroes table. Then it would be possible to sort the characters by the date of creation - new heroes would stand at the beginning of the table.
- the catchPhrase field was written with an error, but there was no time to correct the table and test it, so it remained as it is - cathPhrase.    


<h4> What is not working correctly now:</h4>

1. A partial update of the hero is not possible, because the table has field validation: notEmpty (but with an http request, for update it is possible when only one field is changed, so I need to think about it.)
2. The logic of saving several images of the hero has not been finalized.
3. Because I didn’t work with unit tests before, I didn’t add them to this project, but I read how and why to use it and plan to start working with them.    



<h1>Комментарии</h1>


<h4>Задание очень интересное и можно было бы многое еще в проекте усовершенствовать.</h4>
<h4>Например:</h4>   

- при клике на edit героя, карточка должна разворачиваться, как при нажатии на DETAILS. 
Вообще изначально хотела сделать route /superhero, на клик DETAILS (и я его сделала), для открытия полной карточки персонажа, в которой можно было бы и сделать update и просмотреть все изображения героя. 
Но не получилось корректно передавать пропсы (пробовала обычным коллбеком, useLocation при использовании <Link to=''>, и useContext).   
- для предотвращения всех проблем с передачей пропсов, лучше было использовать Redux, но работа с ним требует времени, поэтому в этом проекте его не использовала.    
- так как при апдейте использую форму, можно было использовать универсальную компоненту FormlHeroes, но не спланировала сразу ее универсальность и не хватило времени на доработку.
- в таблице Heroes не хватает столбца createdAt. Тогда можно было бы персонажей выстраивать по дате создания - новые вставали бы в начало таблицы.   
- поле catchPhrase изначально написала с ошибкой, но не было времени исправлятьтаблицу и тестировать, поэтому осталось как есть - cathPhrase.   
   

<h4> Что работает неккоректно сейчас:</h4>   

1. Частичный апдейт героя невозможен, так как в таблице проописана валидация полей: notEmpty (хотя при запросе http апдейт возможен при изменении только одного поля, поэтому тут еще нужно подумать.)   
2. Не доработала логику сохранения нескольких изображений героя.   
3. Так как ранее не работала с юнит тестами, не добавила их в этот проект, но прочитала суть их использования и планирую начать работать с ними.   

