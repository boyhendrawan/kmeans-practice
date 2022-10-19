// K-means with K 2 
// this still need more 
function kmeans(data,centroid1,centroid2,old_members,iterasi=1){
    let new_members=[[],[]];

    for(let i=0;i<data[1].length;i++){
        // count distance of kmeans used euclidean
       const countC1=euclidean([data[0][i],data[1][i]],centroid1);
      const countC2=euclidean([data[0][i],data[1][i]],centroid2);
    //  chcek who is the closest between the data and put data into appropiate cluster
      if(countC1 <countC2) new_members[0].push(i);
      else new_members[1].push(i);
        
    }
//    find out new centroid 1 and 2
    const newCentroid1= newCentroid(data,new_members[0]);
    const newCentroid2= newCentroid(data,new_members[1]);
    // check if value of memebers data is not moved  if that true break the iteration 
    if(old_members[0].length ==new_members[0].length && centroid1[0]==newCentroid1[0] && centroid1[1] ==newCentroid1[1]){
       console.log(`Jumlah Iterasi      : ${iterasi}`);
       console.log(`Ceteroid 1          :   ${newCentroid1}`);
       console.log(`Ceteroid 2          :   ${newCentroid2}`);
       console.log(`Anggota cluster1    :   ${new_members[0]}`);
       console.log(`Anggota cluster2    :   ${new_members[1]}`);
       
        return ;
    }
    
    console.log(`Jumlah Iterasi      : ${iterasi}`);
    console.log(`Ceteroid 1          :   ${newCentroid1}`);
    console.log(`Ceteroid 2          :   ${newCentroid2}`);
    console.log(`Anggota cluster1    :   ${new_members[0]}`);
    console.log(`Anggota cluster2    :   ${new_members[1]}`);
    // if data of members still moved between cluster
    return kmeans(data,newCentroid1,newCentroid2,new_members,iterasi+=1);
   
}
function euclidean(data,c){
    let result=Math.sqrt(Math.pow(Math.abs(data[0]-c[0]),2) +Math.pow(Math.abs(data[1]-c[1]),2));
    return result;
}

function newCentroid(data,new_members){

    let centroid1=new_members.map(e=> [data[0][e],data[1][e]]);
    let [a,b]=centroid1.reduce((first,acc,index)=>  {
      return [first[0]+acc[0],first[1]+acc[1]];
    },[0,0]);
   a=a/centroid1.length;
   b=b/centroid1.length;
    return [a,b];
}


const datas=[[1,1.1,1,1,0.5,0.5,0.5,0.5,1.5,1.5,1.5],[2,2,1,0.5,2,1,3,4,2,1,0.5]];
const a=0,b=1;
const arbitaryCentroid1=[datas[0][a],datas[1][a]];
const arbitaryCentroid2=[datas[0][b],datas[1][b]];
const members=kmeans(datas,arbitaryCentroid1,arbitaryCentroid2,[a,b]);

// console.log(newCentroid(datas,members[0]));
