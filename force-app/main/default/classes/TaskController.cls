public class TaskController {

    @AuraEnabled(cacheable=true)
    public static List<Task> getTasksByStatus(String tStatus)
    
    {
        return [Select Id, Status,Priority,Subject from Task where Status=:tStatus limit 3];
    }
   
}