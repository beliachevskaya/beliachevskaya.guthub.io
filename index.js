
var unfinishedList=document.getElementById('unfinishedList');
var completedList=document.getElementById('completedList');
var allToDoList=[]; // todo={task: '', data: '', check: false}

$('#addButton').click(function evt() {
    var toDo={};
    var newToDo=document.getElementById('addToDo');
    var newToDoVal=newToDo.value;
    var newDiv=document.createElement('div');
    newDiv.setAttribute('class', 'todoList');
    var item=document.createElement('li');
    item.setAttribute('class', 'list-group-item');
    var text=document.createTextNode(newToDoVal); 
    item.appendChild(text);
    newDiv.appendChild(item);    
    unfinishedList.appendChild(newDiv);
    toDo.task=newToDoVal;
    toDo.check=false;
            
    var editButton=document.createElement('button');
    var editName=document.createTextNode('edit');
    editButton.setAttribute('class', 'btn btn-secondary btn-sm');
    editButton.appendChild(editName);
    newDiv.appendChild(editButton);
    
    editButton.addEventListener('click', function (e) {
        var editTask=prompt('Please, create a To Do', '');
        let task=item.innerHTML;
        item.innerHTML=editTask;
    });

    var delButton=document.createElement('button');
    var delName=document.createTextNode('delete');
    delButton.setAttribute('class', 'btn btn-secondary btn-sm');
    delButton.appendChild(delName);
    newDiv.appendChild(delButton);
    
    delButton.addEventListener('click', function (e) {
        if (!('remove' in Element.prototype)) {
            Element.prototype.remove = function() {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
            }
            };
        };
        e.currentTarget.parentNode.remove();
    });
    var doneButton=document.createElement('button');
    var doneName=document.createTextNode('done');
    doneButton.setAttribute('class', 'btn btn-secondary btn-sm');
    doneButton.appendChild(doneName);
    newDiv.appendChild(doneButton);
    
    doneButton.addEventListener('click', function (e) {
        var completedToDo=completedList.appendChild(e.currentTarget.parentNode);
        var doneTask=document.querySelector('#completedList li');
        doneTask.setAttribute('class', 'list-group-item');
        this.parentNode.removeChild(this);
        if (!('remove' in Element.prototype)) {
            Element.prototype.remove = function() {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
            }
            };
        };
        editButton.remove(); 

    });

    var now=new Date();
    var nowText=document.createTextNode(now.toUTCString());
    newDiv.insertBefore(nowText, item);
    toDo.date=now;
    
    newToDo.value='';
    var fieldVal=$('#priority :selected').val();
        if (fieldVal=='hight') {
            $('#unfinishedList div:last').css('background-color', '#FFDAB9');
            $('#unfinishedList li:last').css('background-color', '#FFDAB9');
            $('#unfinishedList div:last').addClass('hight');
            var hightBadge=document.createElement('span');
            var nameBadge=document.createTextNode('hight priority');
            hightBadge.appendChild(nameBadge);
            hightBadge.setAttribute('class', 'badge badge-danger');
            $('#unfinishedList div:last').prepend(hightBadge);
        } else if (fieldVal=='medium') {
            $('#unfinishedList div:last').css('background-color', '#FBEC5D');
            $('#unfinishedList li:last').css('background-color', '#FBEC5D');
            $('#unfinishedList div:last').addClass('medium');
            var mediumBadge=document.createElement('span');
            var nameBadge=document.createTextNode('medium priority');
            mediumBadge.appendChild(nameBadge);
            mediumBadge.setAttribute('class', 'badge badge-warning');
            $('#unfinishedList div:last').prepend(mediumBadge);
        } else if (fieldVal=='low') {
            $('#unfinishedList div:last').css('background-color', '#98FF98');
            $('#unfinishedList li:last').css('background-color', '#98FF98');
            $('#unfinishedList div:last').addClass('low');
            var lowBadge=document.createElement('span');
            var nameBadge=document.createTextNode('low priority');
            lowBadge.appendChild(nameBadge);
            lowBadge.setAttribute('class', 'badge badge-success');
            $('#unfinishedList div:last').prepend(lowBadge);
        }else if (fieldVal=='no') {
            $('#unfinishedList div:last').addClass('no');
            var noBadge=document.createElement('span');
            var nameBadge=document.createTextNode('no priority');
            noBadge.appendChild(nameBadge);
            noBadge.setAttribute('class', 'badge badge-secondary');
            $('#unfinishedList div:last').prepend(noBadge);
        };
            
    $('#low').click(function () {
        $('.hight').addClass('hide');
        $('.medium').addClass('hide');
        $('.no').addClass('hide');   
    });
    $('#medium').click(function () {
        $('.hight').addClass('hide');
        $('.low').addClass('hide');
        $('.no').addClass('hide');   
    });  
    $('#hight').click(function () {
        $('.medium').addClass('hide');
        $('.low').addClass('hide');
        $('.no').addClass('hide');   
    }); 
    $('#all').click(function () {
        $('.hight').removeClass('hide');
        $('.low').removeClass('hide');
        $('.medium').removeClass('hide'); 
        $('.no').removeClass('hide');
    }); 

    var i=allToDoList.length;
    allToDoList[i]=toDo;
}); 
  

   