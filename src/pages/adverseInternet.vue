<template>
    <div class="w-3/4 mx-5 mt-2 overflow-y-scroll personalData">
        <div class="flex borderr mb-3" v-for="(item, index) in profileData" :key="index">

            <div class="  w-1/4">
                <img src="../assets/rishi.webp" class=" h-28 rishiImage">
            </div>

            <div class=" w-3/4 pt-2">
                <p class="text-start mt-2 ps-2 text-sm text-blue-500 text-bold">
                    {{ item.link }}
                </p>
                <p class="text-start ps-2 text-sm">
                    {{ item.about }}
                </p>
            </div>

            <div class="w-1/4 text-end me-2">
                <fa icon="arrows" class="mt-10 shapeAround rounded-full "></fa>
                <fa icon="code-branch" class="ms-3 shapeAround rounded-full "></fa>
              <fa icon="ellipsis-vertical" class="ms-3 shapeAroundit rounded-full"></fa>
              
            </div>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            profileData: [
                {
                    link: 'https://in.linked.in.com/in/rishi-sunk-302301',
                    about: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum amet est voluptatibus eius suscipit et soluta ad, incidunt provident praesentium eveniet quae ducimus. Molestias ex animi nobis iusto quas temporibus?'
                },
                {
                    link: 'https://in.linked.in.com/in/rishi-sunk-302301',
                    about: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum amet est voluptatibus eius suscipit et soluta ad, incidunt provident praesentium eveniet quae ducimus. Molestias ex animi nobis iusto quas temporibus?'
                },
                {
                    link: 'https://in.linked.in.com/in/rishi-sunk-302301',
                    about: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum amet est voluptatibus eius suscipit et soluta ad, incidunt provident praesentium eveniet quae ducimus. Molestias ex animi nobis iusto quas temporibus?'
                },
                {
                    link: 'https://in.linked.in.com/in/rishi-sunk-302301',
                    about: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum amet est voluptatibus eius suscipit et soluta ad, incidunt provident praesentium eveniet quae ducimus. Molestias ex animi nobis iusto quas temporibus?'
                },
                {
                    link: 'https://in.linked.in.com/in/rishi-sunk-302301',
                    about: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum amet est voluptatibus eius suscipit et soluta ad, incidunt provident praesentium eveniet quae ducimus. Molestias ex animi nobis iusto quas temporibus?'
                },
                {
                    link: 'https://in.linked.in.com/in/rishi-sunk-302301',
                    about: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum amet est voluptatibus eius suscipit et soluta ad, incidunt provident praesentium eveniet quae ducimus. Molestias ex animi nobis iusto quas temporibus?'
                },
            ]
        }
    }

}
</script>

<style scoped>
.rishiImage {
    border-radius: 25px;
    padding: 9%;
}

.borderr {
    border: 1px solid black;
    border-right: none;
    border-radius: 9px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
}
.personalData{
    height: 100vh;
}
.personalData::-webkit-scrollbar{
        display:none;
    }
.shapeAround{
 
    width: 10%;
    padding: 2%;
    background-color: #e9e9ea;
}    
.shapeAroundit{
  
    width: 10%;
    padding: 2%;
    background-color: #e9e9ea;
}
</style>