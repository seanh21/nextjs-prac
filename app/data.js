import prisma from "@/lib/prisma";
 
export default async function getUsers(page) {
    const allUsers = await prisma.User.findMany({
      skip: (page*10),
      take: 10,
    })
 
  return allUsers;
}